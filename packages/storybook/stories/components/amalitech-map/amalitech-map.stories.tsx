import { Meta } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { Story } from "../../../utils/types";

interface MapComponentArgs {
  longitude: number;
  latitude: number;
  zoom: number;
  height: string;
  width: string;
  name: string;
  hideNearByList: boolean;
}

export default {
  title: "Components/ Map",
  component: "amalitech-map",
  tags: ["autodocs"],
  decorators: [withActions],
  argTypes: {
    longitude: {
      control: {
        type: "number",
        min: -180,
        max: 180,
      },
    },
    latitude: {
      control: {
        type: "number",
        min: -90,
        max: 90,
      },
    },
    zoom: {
      control: {
        type: "number",
        min: 1,
        max: 25,
      },
    },
    height: {
      control: {
        type: "text",
      },
    },
    width: {
      control: {
        type: "text",
      },
    },
    name: {
      control: {
        type: "text",
      },
    },
  },
} as Meta;

const Template: Story<MapComponentArgs> = (args) => {
  const longitude = args.longitude
    ? `longitude="${args.longitude}"`
    : 'longitude="-0.1514209"';
  const latitude = args.latitude
    ? `latitude="${args.latitude}"`
    : 'latitude="5.6339642"';
  const zoom = args.zoom ? `zoom="${args.zoom}"` : "";
  const height = args.height ? `height="${args.height}"` : "";
  const width = args.width ? `width="${args.width}"` : "";
  const name = args.name ? `name="${args.name}"` : "";
  const WithoutNearByList = args.hideNearByList
    ? `hide-near-by-list="${args.hideNearByList}"`
    : "";

  document.addEventListener("DOMContentLoaded", () => {
    const map = document.querySelector("amalitech-map") as any;
    map.addMarker(
      4.894491592221901,
      -1.756363203403844,
      "Amalitech Head Office Takoradi"
    );
  });

  return `<amalitech-map ${longitude} ${latitude} ${zoom} ${height} ${width} ${name}${WithoutNearByList} ></amalitech-map>`;
};

export const Default = Template.bind({});
Default.args = {
  height: "600px",
  width: "100%",
  name: "Amalitech Head Office Accra",
};

export const WithCustomHeightAndWidth = Template.bind({});
WithCustomHeightAndWidth.args = {
  height: "400px",
  width: "50%",
  name: "Amalitech Head Office Accra",
};

export const WithCustomZoomLevel = Template.bind({});
WithCustomZoomLevel.args = {
  height: "600px",
  width: "100%",
  name: "Amalitech Head Office Accra",
  zoom: 15,
};

export const WithoutNearByList = Template.bind({});
WithoutNearByList.args = {
  height: "600px",
  width: "100%",
  name: "Amalitech Head Office Accra",
  hideNearByList: true,
};

export const WithCustomPopupName = Template.bind({});
WithCustomPopupName.args = {
  height: "600px",
  width: "100%",
  name: "I am Here",
};

export const WithCustomCoordinates = Template.bind({});
WithCustomCoordinates.args = {
  longitude: 4.894491592221901,
  latitude: -1.756363203403844,
  zoom: 19,
  height: "600px",
  width: "100%",
};
