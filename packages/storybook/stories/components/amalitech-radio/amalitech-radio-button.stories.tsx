import { Meta } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { Story } from "../../../utils/types";

interface RadioComponentArgs {
  disabled: boolean;
  label1: string;
  label2: string;
}

export default {
  title: "Components/Radio Button",
  tags: ["autodocs"],
  component: "amalitech-radio-button",
  parameters: {
    actions: {
      handles: ["aOnFocus", "aOnBlur", "aOnSelect", "valueChange"],
    },
  },
  decorators: [withActions],
} as Meta;

const Template: Story<RadioComponentArgs> = (args) => {
  const disabled = args.disabled ? "disabled" : "";
  const label1 = args.label1 ? `label="${args.label1}"` : "";
  const label2 = args.label2 ? `label="${args.label2}"` : "";

  return `
        <amalitech-radio-group>
            <amalitech-radio-button ${label1} ${disabled}></amalitech-radio-button>
            <amalitech-radio-button ${label2} ${disabled}></amalitech-radio-button>
        </amalitech-radio-group>
    `;
};

export const Normal = Template.bind({});
Normal.args = {
  disabled: false,
  label1: "Yes",
  label2: "No",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label1: "Yes",
  label2: "No",
};
