import { Meta } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { Story } from "../../../utils/types";

interface CheckboxComponentArgs {
  label: string;
  disabled: boolean;
  checked: boolean;
  readonly: boolean;
}

export default {
  title: "Components/Checkbox",
  tags: ["autodocs"],
  component: "amalitech-checkbox",
  parameters: {
    actions: {
      handles: ["valueChange"],
    },
  },
  decorators: [withActions],
} as Meta;

const Template: Story<CheckboxComponentArgs> = (args) => {
  const checked = args.checked ? "checked" : "";
  const readonly = args.readonly ? "readonly" : "";
  const disabled = args.disabled ? "disabled" : "";
  const label = args.label ? args.label : "";

  return `
        <amalitech-checkbox label="${label}" ${readonly} ${disabled} ${checked}></amalitech-checkbox>
    `;
};

export const Normal = Template.bind({});
Normal.args = {
  label: "",
  disabled: false,
  checked: false,
  readonly: false,
};

export const NormalWithLabel = Template.bind({});
NormalWithLabel.args = {
  label: "Yes",
  disabled: false,
  checked: false,
  readonly: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Yes",
  disabled: true,
  checked: false,
  readonly: false,
};

export const Selected = Template.bind({});
Selected.args = {
  label: "Yes",
  checked: true,
  disabled: false,
  readonly: false,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  label: "Yes",
  checked: false,
  disabled: false,
  readonly: true,
};
