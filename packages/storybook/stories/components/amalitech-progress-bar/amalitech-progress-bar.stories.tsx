import {Meta} from "@storybook/web-components";
import { Story } from "../../../utils/types";
import {withActions} from "@storybook/addon-actions/decorator";

interface ProgressBarComponentArgs {
  status: string;
  hideValue: boolean;
  indeterminate: boolean;
  value: number;
  minimumValue: number;
  maximumValue: number;
  label: string;
  helperText: string;
  size: string;
}

export default {
  title: 'Components/Progress Bar',
  component: "amalitech-progress-bar",
  decorators: [withActions],
  tags: ['autodocs'],
  argTypes: {
    status: {control: 'radio', options: ['error', 'success', 'active']},
    hideValue: {control: 'boolean'},
    indeterminate: {control: 'boolean'},
    value: {control: 'number'},
    minimumValue: {control: 'number'},
    maximumValue: {control: 'number'},
    label: {control: 'text'},
    helperText: {control: 'text'},
    size: {control: 'radio', options: ['sm', 'md', 'lg']}
  }
} as Meta;

const Template: Story<ProgressBarComponentArgs>  = (args) => {
  const hideValue = args.hideValue ? 'hide-value' : '';
  const indeterminate = args.indeterminate ? 'indeterminate' : '';
  const value = args.value ? `value="${args.value}"` : 'value="30"';
  const minimumValue = args.minimumValue ? `minimum-value="${args.minimumValue}"` : 'minimum-value="0"';
  const maximumValue = args.maximumValue ? `maximum-value="${args.maximumValue}"` : 'maximum-value="100"';
  const label = args.label ? `label="${args.label}"` : 'label="Progress"';
  const helperText = args.helperText ? `helper-text="${args.helperText}"` : '';
  const status = args.status ? `status="${args.status}"` : 'status="active"';
  const size = args.size ? `size="${args.size}"` : 'size="sm"';

  return `<amalitech-progress-bar ${minimumValue} ${maximumValue} ${size} ${status} ${helperText} ${label} ${indeterminate} ${hideValue} ${value}></amalitech-progress-bar>`
};

export const Default = Template.bind({});
Default.args = {
  indeterminate: false,
  label: 'Default',
  value: 80,
  status: 'active',
  minimumValue: 0,
  maximumValue: 100,
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  indeterminate: true,
  hideValue: true,
  helperText: '',
  label: ' ',
};

export const WithHelperText = Template.bind({});
WithHelperText.args = {
  indeterminate: false,
  label: 'With Helper Text',
  value: 80,
  status: 'active',
  helperText: 'Optional helper text goes here...'
};

export const CustomMinAndMax = Template.bind({});
CustomMinAndMax.args = {
  indeterminate: false,
  label: 'Custom Min and Max',
  maximumValue: 150,
  helperText: '',
  status: 'active',
  minimumValue: 0,
  value: 100
};

export const Success = Template.bind({});
Success.args = {
  indeterminate: false,
  label: 'Success',
  helperText: '',
  status: 'success',
  value: 100
};

export const Error = Template.bind({});
Error.args = {
  indeterminate: false,
  label: 'Error',
  helperText: '',
  status: 'error',
  value: 100
};
