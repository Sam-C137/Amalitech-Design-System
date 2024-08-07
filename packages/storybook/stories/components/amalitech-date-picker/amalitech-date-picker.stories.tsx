import { Meta } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { Story } from "../../../utils/types";

interface DatePickerComponentArgs {
  label: string;
  firstDayOfWeek: string;
  value: string;
  min: string;
  max: string;
  outputType: string;
  outputFormat: string;
  disabled: boolean;
}

export default {
  title: "Components/Date Picker",
  component: "amalitech-date-picker",
  tags: ["autodocs"],
  parameters: {
    actions: {
      handles: ["amalitechDateChange", "amalitechDateClear"],
    },
  },
  argTypes: {
    max: {
      control: { type: "text" },
    },
    min: {
      control: { type: "text" },
    },
    value: {
      control: { type: "text" },
    },
  },
  decorators: [withActions],
} as Meta;

const Template: Story<DatePickerComponentArgs> = (args) => {
  const label = args.label ? `label="${args.label}"` : "";
  const firstDayOfWeek = args.firstDayOfWeek
    ? `first-day-of-week="${args.firstDayOfWeek}"`
    : "";
  const value = args.value ? `value="${args.value}"` : "";
  const min = args.min ? `min="${args.min}"` : "";
  const max = args.max ? `max="${args.max}"` : "";
  const outputType = args.outputType ? `output-type="${args.outputType}"` : "";
  const outputFormat = args.outputFormat
    ? `output-format="${args.outputFormat}"`
    : "";
  const disabled = args.disabled ? `disabled` : "";

  return `<div style="height: 400px;">
  <amalitech-date-picker ${label}${firstDayOfWeek}${value}${min}${max}${outputType}${outputFormat}${disabled}></amalitech-date-picker>
  </div>`;
};

export const Default = Template.bind({});
Default.args = {};

export const WithValue = Template.bind({});
WithValue.args = {
  value: "2021-06-01",
};

export const WithMinAndMax = Template.bind({});
WithMinAndMax.args = {
  min: "2021-06-09",
  max: "2021-07-18",
};

export const WithCustomLabel = Template.bind({});
WithCustomLabel.args = {
  label: "Schedule a meeting",
};

export const WithSundayFirstDayOfWeek = Template.bind({});
WithSundayFirstDayOfWeek.args = {
  firstDayOfWeek: "0",
};

export const WithDDMMYYOutputFormat = Template.bind({});
WithDDMMYYOutputFormat.args = {
  outputFormat: "dd-mm-yyyy",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
