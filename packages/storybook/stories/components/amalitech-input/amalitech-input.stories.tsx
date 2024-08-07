import { Meta } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { Story } from "../../../utils/types";

interface InputComponentArgs {
  readonly: boolean;
  withIcon: boolean;
  required: boolean;
  disabled: boolean;
  counter: boolean;
  floatLabel: boolean;
  placeholder: string;
  pattern: string;
  label: string;
  min: number;
  max: number;
  type: string;
  maxLength: number;
  helperText: string;
  autofocus: boolean;
}

export default {
  title: "Components/Input",
  tags: ["autodocs"],
  component: "amalitech-input",
  parameters: {
    actions: {
      handles: ["valueChanged"],
    },
  },
  decorators: [withActions],
} as Meta;

const Template: Story<InputComponentArgs> = (args) => {
  const autofocus = args.autofocus ? "autofocus" : "";
  const readonly = args.readonly ? "readonly" : "";
  const required = args.required ? "required" : "";
  const disabled = args.disabled ? "disabled" : "";
  const counter = args.counter ? "counter" : "";
  const floatLabel = args.floatLabel ? "float-label" : "";
  const placeholder = args.placeholder ? `placeholder=${args.placeholder}` : "";
  const pattern = args.pattern ? `pattern=${args.pattern}` : "";
  const label = args.label ? `label=${args.label}` : "";
  const min = args.min ? `min=${args.min}` : "";
  const max = args.max ? `max=${args.max}` : "";
  const type = args.type ? `type=${args.type}` : "";
  const maxLength = args.maxLength ? `max-length=${args.maxLength}` : "";
  const helperText = args.helperText ? `helper-text=${args.helperText}` : "";
  const withIcon = args.withIcon
    ? `
  <svg slot="iconLeft" width="21" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="gray" preserveAspectRatio="xMinYMin" class="jam jam-search">
  <path d="M8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12m6.32-1.094 3.58 3.58a1 1 0 1 1-1.415 1.413l-3.58-3.58a8 8 0 1 1 1.414-1.414z" />
</svg>
  `
    : "";

  return `
    <amalitech-input ${floatLabel} ${type} ${max} ${min} ${required} ${maxLength} ${helperText} ${counter} ${label} ${pattern} ${disabled} ${placeholder} ${readonly} ${autofocus}>
      ${withIcon}
    </amalitech-input>
  `;
};

export const Normal = Template.bind({});
Normal.args = {};

export const WithLabelAndPlaceholder = Template.bind({});
WithLabelAndPlaceholder.args = {
  label: "Label",
  placeholder: "placeholder",
};

export const WithInputValidation = Template.bind({});
WithInputValidation.args = {
  pattern: "[A-Za-z]{3}",
  placeholder: "placeholder",
  label: "Label",
  required: true,
};

export const WithCounter = Template.bind({});
WithCounter.args = {
  placeholder: "placeholder",
  label: "Label",
  required: true,
  counter: true,
  maxLength: 10,
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  placeholder: "placeholder",
  helperText: "Input with min and max",
  max: true,
  min: 10,
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  placeholder: "placeholder",
  type: "password",
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  placeholder: "placeholder",
  readonly: true,
  type: "text",
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "placeholder",
  disabled: true,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  placeholder: "placeholder",
  withIcon: true,
};

export const WithFloatLabel = Template.bind({});
WithFloatLabel.args = {
  label: "Label",
  floatLabel: true,
};
