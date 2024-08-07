import { Component, Prop, h, Element, Host, State } from '@stencil/core';
import { Coordinates } from '../../interfaces';
import L from 'leaflet';
import 'leaflet.markercluster';
import 'leaflet.locatecontrol';
import 'leaflet.locatecontrol/dist/L.Control.Locate.min.css';
import { Method } from '@stencil/core';
import { MapIcons } from '../../utils/svg-icons';

@Component({
  tag: 'amalitech-map',
  styleUrls: ['leaflet.scss', 'amalitech-map.scss'],
  shadow: true,
})
export class AmalitechMap {
  @Element() element: HTMLAmalitechMapElement;
  /**
   * Specifies the icon url
   */
  @Prop() iconUrl: string = 'https://i.ibb.co/LYT961S/352521-location-on-icon.png';
  /**
   * Specifies the longitude value
   */
  @Prop({ mutable: true }) longitude: number = 5.6339642;

  /**
   * Specifies the latitude value
   */
  @Prop({ mutable: true }) latitude: number = -0.1514209;

  /**
   * Sets the zoom level of the map
   */
  @Prop() zoom: number = 19;

  /**
   * If set to true, hides the list of nearby landmarks
   */
  @Prop() hideNearByList: boolean = false;

  /**
   * Sets the height of the map
   */
  @Prop() height: string = '600px';

  /**
   * Sets the width of the map
   */
  @Prop() width: string = '100%';

  /**
   * Adds a name to be shown in the popup
   */
  @Prop() name: string = '';

  @State() coordinatesList: Coordinates[] = [];

  private map: L.Map;

  componentDidLoad() {
    const selector = this.element?.shadowRoot?.querySelector('#map') as HTMLDivElement;
    this.map = L.map(selector).setView([this.latitude, this.longitude], this.zoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxNativeZoom: this.zoom,
      maxZoom: 25,
    }).addTo(this.map);

    const customIcon = L.icon({
      iconUrl: this.iconUrl,
      iconSize: [32, 32],
    });
    L.marker([this.latitude, this.longitude], {
      icon: customIcon,
    })
      .addTo(this.map)
      .bindPopup(`${this.name}` || 'Name not provided')
      .openPopup()
      .on('click', () => {
        this.map.setView([this.latitude, this.longitude], 19);
      });

    L.control
      .locate({
        position: 'topleft',
        flyTo: true,
        locateOptions: {
          enableHighAccuracy: true,
        },
      })
      .addTo(this.map);

    var marker: any;
    this.map.on('locationfound', async ev => {
      if (!marker) {
        this.latitude = ev.latlng.lat;
        this.longitude = ev.latlng.lng;
        this.coordinatesList = await this.generateRandomCoordinates();
        marker = L.marker(ev.latlng);
      } else {
        marker.setLatLng(ev.latlng);
      }
    });
  }

  /**
   * Adds a marker to the map
   * @param {lat long, name, iconUrl, zoom} @see https://leafletjs.com/reference.html#marker
   */
  @Method()
  async addMarker(lat: number, long: number, name: string, iconUrl: string = this.iconUrl, zoom = 19) {
    const customIcon = L.icon({
      iconUrl: iconUrl,
      iconSize: [32, 32],
    });
    L.marker([lat, long], {
      icon: customIcon,
    })
      .addTo(this.map)
      .bindPopup(name)
      .on('click', () => {
        this.map.setView([lat, long], zoom);
      });
  }

  async componentWillLoad() {
    this.coordinatesList = await this.generateRandomCoordinates();
  }

  private async getPlaceName(latitude: number, longitude: number) {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`);
      const data = await response.json();
      return data.display_name;
    } catch (error) {
      console.error('Error fetching place name:', error);
      return '';
    }
  }

  private async generateRandomCoordinates() {
    const randomInRange = (min: any, max: any) => Math.random() * (max - min) + min;

    const coordinatesList = [];
    for (let i = 0; i < 5; i++) {
      const randomLat = randomInRange(this.latitude - 0.01, this.latitude + 0.01);
      const randomLng = randomInRange(this.longitude - 0.01, this.longitude + 0.01);
      const name = await this.getPlaceName(randomLat, randomLng);
      coordinatesList.push({
        name: name || `Location ${i + 1}`,
        coordinate: `${randomLat.toFixed(6)}, ${randomLng.toFixed(6)}`,
        href: `https://www.openstreetmap.org/?mlat=${randomLat}&mlon=${randomLng}#map=17/${randomLat}/${randomLng}`,
      });
    }
    return coordinatesList;
  }

  render() {
    return (
      <Host>
        <section class={'map-container'}>
          <div id="map" style={{ height: this.height, width: this.width }}></div>
        </section>

        {!this.hideNearByList && (
          <div style={{ width: this.width }}>
            {this.coordinatesList && <h1 class="landmark-text">Landmarks around the area: </h1>}
            {this.coordinatesList &&
              this.coordinatesList.map((coordinates, index) => (
                <div class="coordinates-list" key={index}>
                  <div class="icon">{MapIcons.locationIcon()}</div>
                  <div>
                    <a href={coordinates.href}>
                      <h1>{coordinates.name}</h1>
                    </a>
                    <p>{coordinates.coordinate}</p>
                  </div>
                </div>
              ))}
          </div>
        )}
      </Host>
    );
  }
}
