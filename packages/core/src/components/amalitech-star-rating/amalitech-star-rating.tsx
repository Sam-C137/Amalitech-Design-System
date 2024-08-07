import { Component, Prop, h, Event, EventEmitter, State, Host, Element } from '@stencil/core';
import { color } from '../../global/variables';

@Component({
  tag: 'amalitech-star-rating',
  styleUrl: 'amalitech-star-rating.scss',
  shadow: true,
})
export class AmalitechStarRating {
  @Element() el: HTMLAmalitechStarRatingElement;
  /**
   * The number of stars to display
   */
  @Prop() count: number = 5;
  /**
   * The value of the star rating
   */
  @Prop() value: number = 0;
  /**
   * If true, the user cannot interact with the star rating
   */
  @Prop() readonly: boolean = false;
  /**
   * The color of the star rating stroke, default is `#474d66`
   */
  @Prop() strokeColor: string = color.neutral600;
  /**
   * The size of the star rating
   */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';
  /**
   * If true, the user cannot hover over the star rating
   */
  @Prop() hoverDisabled: boolean = false;
  /**
   * Indicates the disabled state of the component
   */
  @Prop() disabled: boolean = false;
  /**
   * If true, the star rating will show a variant that animates on render
   */
  @Prop() animated: boolean = false;
  /**
   * The event emmitted when the star rating is changed or a selection is made
   */
  @Event() amalitechRatingChange: EventEmitter<number>;

  @State() stars: number[] = [];
  @State() hoverValue: number = 0;
  @State() rating = this.value;
  @State() offsetValue: number = Number(this.sizes.split('px')[0]) * (this.size !== 'small' ? 7.333 : 12);

  componentWillLoad() {
    this.stars = Array(this.count).fill(0);
    if (Boolean(this.value) && this.value > 0 && this.value <= this.count) {
      this.rating = this.value;
    }
  }

  private handleKeyDown = (e: KeyboardEvent, index: number) => {
    if (e.key === 'Enter' || e.key === ' ') {
      if (index === 0 && this.rating === 1) {
        this.handleDeselectFirst();
      } else {
        this.rate(index);
      }
    }
  };

  private rate(index: number) {
    if (!this.readonly && !this.disabled) {
      this.rating = index + 1;
      this.amalitechRatingChange.emit(this.rating);
    }
  }

  private hover(index: number) {
    if (!this.hoverDisabled && !this.disabled && !this.readonly) {
      this.hoverValue = index + 1;
    }
  }

  private leave() {
    this.hoverValue = 0;
  }

  get sizes() {
    switch (this.size) {
      case 'small':
        return '12px';
      case 'medium':
        return '24px';
      case 'large':
        return '48px';
      default:
        return '24px';
    }
  }

  /**
   * Deselection if the rating is already 1
   */
  private handleDeselectFirst() {
    this.rate(-1);
  }

  render() {
    return (
      <Host disabled={this.disabled} aria-label={`Rating: ${this.rating} out of ${this.stars.length} stars`} role="img">
        {this.stars.map((_, index) =>
          this.animated ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={this.sizes}
              height={this.sizes}
              viewBox="0 0 48 48"
              onClick={() => {
                if (index === 0 && this.rating === 1) {
                  this.handleDeselectFirst();
                } else {
                  this.rate(index);
                }
              }}
              class={{ active: index < this.rating || index < this.hoverValue }}
              onMouseOver={() => this.hover(index)}
              onMouseLeave={() => this.leave()}
              tabindex={this.disabled ? -1 : 0}
              onFocus={() => this.el.addEventListener('keydown', e => this.handleKeyDown(e, index))}
              onBlur={() => this.el.removeEventListener('keydown', e => this.handleKeyDown(e, index))}
            >
              <path
                fill="#fff"
                stroke={this.strokeColor}
                stroke-linejoin="round"
                stroke-dasharray={this.offsetValue}
                stroke-dashoffset={this.offsetValue}
                stroke-linecap="round"
                stroke-width="2"
                d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z"
              >
                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values={`${this.offsetValue};0`} />
                <animate fill="freeze" begin="0.6s" dur="0.15s" values="0;0.3" />
              </path>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={this.sizes}
              height={this.sizes}
              viewBox="0 0 48 48"
              onClick={() => {
                if (index === 0 && this.rating === 1) {
                  this.handleDeselectFirst();
                } else {
                  this.rate(index);
                }
              }}
              class={{ active: index < this.rating || index < this.hoverValue }}
              onMouseOver={() => this.hover(index)}
              onMouseLeave={() => this.leave()}
              tabindex={this.disabled ? -1 : 0}
              onFocus={() => this.el.addEventListener('keydown', e => this.handleKeyDown(e, index))}
              onBlur={() => this.el.removeEventListener('keydown', e => this.handleKeyDown(e, index))}
            >
              <path
                fill="#fff"
                stroke={this.strokeColor || '#474d66'}
                stroke-linejoin="round"
                stroke-width="2"
                d="M23.9986 5L17.8856 17.4776L4 19.4911L14.0589 29.3251L11.6544 43L23.9986 36.4192L36.3454 43L33.9586 29.3251L44 19.4911L30.1913 17.4776L23.9986 5Z"
              />
            </svg>
          ),
        )}
      </Host>
    );
  }
}
