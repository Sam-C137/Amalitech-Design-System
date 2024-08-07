import { Meta } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { Story } from "../../../../utils/types";

interface SelectOptionComponentArgs {
  value: string;
  disabled: boolean;
  selectedStyle: string;
  multiple: boolean;
  content: string;
}

export default {
  title: "Components/Select/Option",
  tags: ["autodocs"],
  component: "amalitech-select-option",
  decorators: [withActions],
} as Meta;

const Template: Story<SelectOptionComponentArgs> = (args) => {
  const disabled = args.disabled ? `disabled` : "";
  const selectedStyle = args.selectedStyle
    ? `selected-style="${args.selectedStyle}"`
    : "";
  return `<amalitech-select-option ${disabled} ${selectedStyle} value="${args.value}">${args.content}</amalitech-select-option>`;
};

export const Default = Template.bind({});
Default.args = {
  content: "Option 1",
  value: "option 1",
  disabled: false,
  selectedStyle: "checkmark",
  multiple: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  content: "Option 2",
  value: "option 2",
  disabled: true,
  selectedStyle: "checkmark",
  multiple: false,
};
