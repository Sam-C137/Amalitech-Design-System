import { Meta } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { Story } from "../../../utils/types";

interface TimePickerArgs {
  label: string;
  value: string;
  meridian: boolean;
  seconds: boolean;
  size: string;
  max: string;
  min: string;
  required: boolean;
}

export default {
  title: "Components/Time Picker",
  component: "amalitech-time-picker",
  tags: ["autodocs"],
  parameters: {
    actions: {
      handles: ["amalitechTimeChange"],
    },
  },
  argTypes: {
    label: { control: "text" },
    value: { control: "text" },
    meridian: { control: "boolean" },
    seconds: { control: "boolean" },
    size: { control: "select", options: ["small", "medium", "large"] },
    max: { control: "text" },
    min: { control: "text" },
  },
  decorators: [withActions],
} as Meta;

const Template: Story<TimePickerArgs> = (args) => {
  const label = args.label ? `label="${args.label}"` : "";
  const value = args.value ? `value="${args.value}"` : "";
  const meridian = args.meridian ? "meridian" : "";
  const seconds = args.seconds ? "seconds" : "";
  const size = args.size ? `size="${args.size}"` : "";
  const max = args.max ? `max="${args.max}"` : "";
  const min = args.min ? `min="${args.min}"` : "";
  const required = args.required ? "required" : "";
  return `
    <div style="margin-bottom: 15rem;">
      <amalitech-time-picker ${label} ${value} ${meridian} ${size} ${seconds} ${max} ${min} ${required}></amalitech-time-picker>
    </div>
  `;
};

export const Default = Template.bind({});

export const WithCustomLabel = Template.bind({});
WithCustomLabel.args = {
  label: "What time is it?",
};

export const WithCustomValue = Template.bind({});
WithCustomValue.args = {
  value: "12:00",
};

export const Meridian = Template.bind({});
Meridian.args = {
  value: "03:00",
  meridian: true,
};

export const MaxAndMin = Template.bind({});
MaxAndMin.args = {
  max: "09:30pm",
  min: "06:30pm",
  meridian: true,
};

export const WithSeconds = Template.bind({});
WithSeconds.args = {
  seconds: true,
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Required = Template.bind({});
Required.args = {
  required: true,
};
