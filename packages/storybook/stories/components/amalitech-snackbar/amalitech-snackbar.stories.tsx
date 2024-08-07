import { Meta } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { Story } from "../../../utils/types";

interface SnackbarComponentArgs {
  rounded: boolean;
  target: string;
  closeable: boolean;
  autoClose: boolean;
  closeSecs: number;
  snackbarText: string;
  callToActionText: string;
}

export default {
  title: "Components/Snackbar",
  tags: ["autodocs"],
  component: "amalitech-snackbar",
  decorators: [withActions],
} as Meta;

const Template: Story<SnackbarComponentArgs> = (args) => {
  const rounded = args.rounded ? "rounded" : "";
  const target = args.target ? args.target : "";
  const closeable = args.closeable ? "closeable" : "";
  const autoClose = args.autoClose ? "autoClose" : "";
  const closeSecs = args.closeSecs ? args.closeSecs : "";
  const snackbarText = args.snackbarText
    ? `snackbar-text="${args.snackbarText}"`
    : 'snackbar-text="Setup your staff directory."';
  const callToActionText = args.callToActionText
    ? `call-to-action-text="${args.callToActionText}"`
    : 'call-to-action-text="Learn more"';

  return `
  <amalitech-snackbar target="${target}" ${rounded} ${callToActionText} ${snackbarText} ${closeable} ${autoClose} close-secs="${closeSecs}">
    <p style="font-weight: bold;">Some message</p>
  </amalitech-snackbar>
  `;
};

export const Normal = Template.bind({});
Normal.args = {};

export const Rounded = Template.bind({});
Rounded.args = {
  rounded: true,
};

export const Closeable = Template.bind({});
Closeable.args = {
  closeable: true,
};

export const UnCloseable = Template.bind({});
UnCloseable.args = {
  closeable: false,
};
