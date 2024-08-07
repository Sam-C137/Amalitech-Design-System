import { Meta } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { Story } from "../../../../utils/types";

interface VisualPickerItemArgs {
  value: string;
  disabled: boolean;
  selected: boolean;
  items: {
    label: string;
    icon: string;
    value: string;
    text?: string;
  }[];
  disabledItems: number[];
  selectedItems: number[];
  imgSize?: string;
}

export default {
  title: "Components/Visual Picker/Item",
  tags: ["autodocs"],
  component: "amalitech-visual-picker-item",
  decorators: [withActions],
} as Meta;

const Template: Story<VisualPickerItemArgs> = (args) => {
  return `
    <amalitech-visual-picker
      ${args.disabled ? "disabled" : ""}
      style="margin: 1rem;"
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
  items: [
    {
      label: "Lightning",
      icon: "./demo-assets/svg/lightning.svg",
      value: "lightning",
    },
  ],
  disabledItems: [],
  selectedItems: [],
};
