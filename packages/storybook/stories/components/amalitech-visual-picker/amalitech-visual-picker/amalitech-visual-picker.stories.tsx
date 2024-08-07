import { Meta } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { Story } from "../../../../utils/types";

interface VisualPickerComponentArgs {
  uncoverable: boolean;
  selectVariant: "checkbox" | "radio";
  align: "horizontal" | "vertical";
  disabled: boolean;
  items: {
    label: string;
    icon: string;
    value: string;
    text?: string;
  }[];
  styling: string;
  disabledItems: number[];
  selectedItems: number[];
  imgSize?: string;
}

export default {
  title: "Components/Visual Picker",
  component: "amalitech-visual-picker",
  tags: ["autodocs"],
  argTypes: {
    disabledItems: { control: "none" },
    styling: { control: "none" },
    selectedItems: { control: "none" },
  },
  parameters: {
    actions: {
      handles: ["pickerChange"],
    },
  },
  decorators: [withActions],
} as Meta;

const Template: Story<VisualPickerComponentArgs> = (args) => {
  return `
    <amalitech-visual-picker
      align="${args.align || "horizontal"}"
      ${args.disabled ? "disabled" : ""}
      ${args.uncoverable ? "uncoverable" : ""}
      select-variant="${args.selectVariant}"
      style="margin: 1rem;${args.styling}"
    >
      ${args.items
        .map(
          (item) => `
          <amalitech-visual-picker-item ${
            args.disabledItems.includes(args.items.indexOf(item))
              ? "disabled"
              : ""
          } ${
            args.selectedItems.includes(args.items.indexOf(item))
              ? "selected"
              : ""
          } label="${item.label}" value="${item.value}">
             ${
               item.text
                 ? `<p style="font-size: 2rem; width: 4em;">${item.text}</p>`
                 : `<img  width="${args.imgSize || "80px"}" height="${
                     args.imgSize || "80px"
                   }" src="${item.icon}" alt="${item.label}" />`
             }
          </amalitech-visual-picker-item>
        `
        )
        .join("")}
    </amalitech-visual-picker>
  `;
};

export const Default = Template.bind({});
Default.args = {
  selectVariant: "checkbox",
  items: [
    { label: "Fire", icon: "./demo-assets/svg/fire.svg", value: "fire" },
    { label: "Water", icon: "./demo-assets/svg/water.svg", value: "water" },
    { label: "Air", icon: "./demo-assets/svg/air.svg", value: "air" },
    { label: "Earth", icon: "./demo-assets/svg/earth.svg", value: "earth" },
  ],
  styling: "",
  disabledItems: [],
  selectedItems: [],
};

export const Radio = Template.bind({});
Radio.args = {
  selectVariant: "radio",
  items: [
    {
      label: "Bohemian Rhapsody",
      icon: "./demo-assets/queen/bohemian-rhapsody.jpg",
      value: "br",
    },
    {
      label: "Queen II",
      icon: "./demo-assets/queen/queen-ii.jpg",
      value: "qii",
    },
    {
      label: "News Of The World",
      icon: "./demo-assets/queen/news of the world.jpg",
      value: "notw",
    },
    {
      label: "Queen Rock Montreal",
      icon: "./demo-assets/queen/queen-rock-montreal.jpg",
      value: "qrm",
    },
  ],
  styling: "",
  disabledItems: [],
  selectedItems: [],
  imgSize: "120px",
};

export const Vertical = Template.bind({});
Vertical.args = {
  selectVariant: "checkbox",
  align: "vertical",
  items: [
    {
      label: "Lightning",
      icon: "./demo-assets/svg/lightning.svg",
      value: "lightning",
    },
    { label: "Snake", icon: "./demo-assets/svg/snake.svg", value: "snake" },
  ],
  styling: "",
  disabledItems: [],
  selectedItems: [],
};

export const Uncoverable = Template.bind({});
Uncoverable.args = {
  selectVariant: "checkbox",
  uncoverable: true,
  items: [
    { label: "Alpha", text: "&alpha;", value: "a" },
    { label: "Beta", text: "&beta;", value: "b" },
    { label: "Gamma", text: "&gamma;", value: "g" },
    { label: "Delta", text: "&delta;", value: "d" },
  ],
  styling: "",
  disabledItems: [],
  selectedItems: [],
};

export const Disabled = Template.bind({});
Disabled.args = {
  selectVariant: "radio",
  items: [
    {
      label: "Real Madrid",
      icon: "./demo-assets/clubs/real-madrid.png",
      value: "rmfc",
    },
    {
      label: "Barcelona",
      icon: "./demo-assets/clubs/barcelona.png",
      value: "barca",
    },
    {
      label: "Bayern Munich",
      icon: "./demo-assets/clubs/bayern.png",
      value: "bayern",
    },
    {
      label: "Liverpool",
      icon: "./demo-assets/clubs/liverpool.png",
      value: "lfc",
    },
  ],
  disabled: true,
  disabledItems: [],
  selectedItems: [],
  imgSize: "120px",
};

export const DisabledItem = Template.bind({});
DisabledItem.args = {
  selectVariant: "checkbox",
  items: [
    { label: "Fire", icon: "./demo-assets/svg/fire.svg", value: "fire" },
    { label: "Water", icon: "./demo-assets/svg/water.svg", value: "water" },
    { label: "Wrench", icon: "./demo-assets/svg/wrench.svg", value: "wrench" },
    { label: "Air", icon: "./demo-assets/svg/air.svg", value: "air" },
    { label: "Earth", icon: "./demo-assets/svg/earth.svg", value: "earth" },
  ],
  styling: "",
  disabledItems: [2],
  selectedItems: [],
};

export const SelectedItem = Template.bind({});
SelectedItem.args = {
  selectVariant: "checkbox",
  items: [
    { label: "Fire", icon: "./demo-assets/svg/fire.svg", value: "fire" },
    { label: "Water", icon: "./demo-assets/svg/water.svg", value: "water" },
    { label: "Air", icon: "./demo-assets/svg/air.svg", value: "air" },
    { label: "Earth", icon: "./demo-assets/svg/earth.svg", value: "earth" },
  ],
  styling: "",
  disabledItems: [],
  selectedItems: [1, 3],
};

export const Customized = Template.bind({});
Customized.args = {
  selectVariant: "checkbox",
  items: [{ label: "Amalitech", icon: "./logo-2.svg", value: "amalitech" }],
  styling: `
    --visual-picker-active-color: #53ff5c;
    --visual-picker-checked-icon: url('https://i.ibb.co/GVLbMHB/check.png');
  `,
  disabledItems: [],
  selectedItems: [],
  imgSize: "120px",
};
