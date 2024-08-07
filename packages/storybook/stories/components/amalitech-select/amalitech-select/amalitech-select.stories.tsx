import { Meta } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { Story } from "../../../../utils/types";

interface SelectComponentArgs {
  label: string;
  scrollable: boolean;
  required: boolean;
  multiple: boolean;
  disabled: boolean;
  itemText: string[];
  disabledIndexes?: number[];
  selectedIndexes?: number[];
  selectedStyle?: string;
  inlineStyle: string;
}

export default {
  title: "Components/Select",
  tags: ["autodocs"],
  component: "amalitech-select",
  parameters: {
    actions: {
      handles: ["amalitechChange"],
    },
  },
  decorators: [withActions],
} as Meta;

const Template: Story<SelectComponentArgs> = (args) => {
  let options = "";
  for (let i = 0; i < args.itemText.length; i++) {
    const disabled = args.disabledIndexes?.includes(i) ? "disabled" : "";
    const selected = args.selectedIndexes?.includes(i) ? "selected" : "";
    options += `<amalitech-select-option value="option ${
      i + 1
    }" ${disabled} ${selected}>${args.itemText[i]}</amalitech-select-option>`;
  }

  const multiple = args.multiple ? "multiple" : "";
  const disabled = args.disabled ? "disabled" : "";
  const selectedStyle = args.selectedStyle
    ? `selected-style="${args.selectedStyle}"`
    : "";
  const scrollable = args.scrollable ? "scrollable" : "";
  const required = args.required ? "required" : "";

  return `

  <div style="margin: 20px 20px 200px 20px;">
  <amalitech-select label="${args.label}" ${args.inlineStyle} ${selectedStyle} ${multiple} ${disabled} ${scrollable} ${required}>
      ${options}
    </amalitech-select>
  </div>
  `;
};

export const Standard = Template.bind({});
Standard.args = {
  label: "Select one item",
  size: "medium",
  multiple: false,
  disabled: false,
  itemText: ["Item 1", "Item 2", "Item 3"],
};

export const Multiple = Template.bind({});
Multiple.args = {
  label: "Select multiple items",
  size: "medium",
  multiple: true,
  disabled: false,
  itemText: ["Item 1", "Item 2", "Item 3"],
  inlineStyle: `style="--select-width: 20rem"`,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Entire select disabled",
  size: "medium",
  multiple: false,
  disabled: true,
  itemText: ["Item 1", "Item 2", "Item 3"],
  inlineStyle: `style="--select-width: 20rem"`,
};

export const DisabledItems = Template.bind({});
DisabledItems.args = {
  label: "Some items disabled",
  size: "medium",
  multiple: false,
  disabled: false,
  itemText: ["Item 1", "Item 2", "Item 3"],
  disabledIndexes: [1],
  inlineStyle: `style="--select-width: 20rem"`,
};

export const Required = Template.bind({});
Required.args = {
  label: "Selection required",
  size: "medium",
  multiple: false,
  disabled: false,
  itemText: ["Item 1", "Item 2", "Item 3"],
  required: true,
  inlineStyle: `style="--select-width: 15rem"`,
};

export const DefaultSelected = Template.bind({});
DefaultSelected.args = {
  label: "Item selected by default",
  size: "medium",
  multiple: false,
  disabled: false,
  itemText: ["Item 1", "Item 2", "Item 3"],
  selectedIndexes: [2],
  inlineStyle: `style="--select-width: 20rem"`,
};

export const Scrollable = Template.bind({});
Scrollable.args = {
  label: "Scrollable select",
  size: "medium",
  multiple: true,
  disabled: false,
  itemText: [
    "a19",
    "c12",
    "b11",
    "c99",
    "x18",
    "t15",
    "a14",
    "b13",
    "c10",
    "z45",
  ],
  scrollable: true,
  inlineStyle: `style="--select-width: 20rem"`,
};

export const CustomSelectIcon1Single = Template.bind({});
CustomSelectIcon1Single.args = {
  label: "Custom select icon 1",
  selectedStyle: "checkRounded",
  multiple: false,
  disabled: false,
  itemText: ["Item 1", "Item 2", "Item 3"],
};

export const CustomSelectIcon1Multiple = Template.bind({});
CustomSelectIcon1Multiple.args = {
  label: "Custom select icon 1",
  selectedStyle: "checkRounded",
  multiple: true,
  disabled: false,
  itemText: ["Item 1", "Item 2", "Item 3"],
  inlineStyle: `style="--select-width: 20rem"`,
};

export const CustomSelectIcon2Single = Template.bind({});
CustomSelectIcon2Single.args = {
  label: "Custom select icon 2",
  selectedStyle: "dot",
  multiple: false,
  disabled: false,
  itemText: ["Item 1", "Item 2", "Item 3"],
};

export const CustomSelectIcon2Multiple = Template.bind({});
CustomSelectIcon2Multiple.args = {
  label: "Custom select icon 2",
  selectedStyle: "dot",
  multiple: true,
  disabled: false,
  itemText: ["Item 1", "Item 2", "Item 3"],
  inlineStyle: `style="--select-width: 20rem"`,
};
