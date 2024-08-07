import { Meta } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { Story } from "../../../utils/types";

interface SwitchComponentArgs {
  checked: boolean;
  disabled: boolean;
  size: string;
}

export default {
  title: "Components/Switch",
  tags: ["autodocs"],
  component: "amalitech-switch",
  parameters: {
    actions: {
      handles: ["amalitechSwitchChange"],
    },
  },
  decorators: [withActions],
} as Meta;

const Template: Story<SwitchComponentArgs> = (args) => {
  const checked = args.checked ? "checked" : "";
  const disabled = args.disabled ? "disabled" : "";
  const size = args.size ? `size="${args.size}"` : "";

  return `
        <amalitech-switch ${checked} ${disabled} ${size}></amalitech-switch>
    `;
};

export const Standard = Template.bind({});
Standard.args = {
  checked: false,
  disabled: false,
};

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  checked: false,
  disabled: true,
};

export const Small = Template.bind({});
Small.args = {
  checked: false,
  disabled: false,
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  checked: false,
  disabled: false,
  size: "large",
};
