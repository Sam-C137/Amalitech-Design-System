import { Meta } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { Story } from "../../../utils/types";

export interface AlertComponentArgs {
  position: string;
  state: string;
  title: string;
  subtitle: string;
  highContrast: boolean;
}

export default {
  title: "Components/Alert",
  tags: ["autodocs"],
  component: "amalitech-alert",
  parameters: {
    actions: {
      handles: ["alert:alert-notification"],
    },
  },
  argTypes: {
    highContrast: { control: "boolean" },
    title: { control: "text" },
    subtitle: { control: "text" },
    state: {
      control: "radio",
      options: ["success", "error", "info", "warning"],
    },
    position: {
      control: "radio",
      options: ["top-right", "top-left", "bottom-left", "bottom-right"],
    },
  },
  decorators: [withActions],
} as Meta;

const Template: Story<AlertComponentArgs> = (args) => {
  const position = args.position ? `position="${args.position}"` : "top-right";
  const state = args.state ? `${args.state}` : "warning";
  const highContrast = args.highContrast ? "high-contrast" : "";
  const title = args.title ? args.title : "This is an alert message";
  const subtitle = args.subtitle
    ? args.subtitle
    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

  return `
    <div style="height: 50vh; width: 100vw">
    <amalitech-button variant="primary" id="notification-btn">Alert</amalitech-button>

    <amalitech-alert name="demo-notification-manager" ${position}>
      <amalitech-alert-content ${highContrast}>
        <div slot="title">
          ...
        </div>
        <div slot="subtitle">...</div>
      </amalitech-alert-content>
    </amalitech-alert>

    </div>

    <script>
      let count = 1;

      document.getElementById('notification-btn').addEventListener('click', () => {
        window.dispatchEvent(
          new CustomEvent('alert:alert-notification', {
            detail: {
              target: 'demo-notification-manager',
              title: '${title}' + count++,
              state: '${state}',
              subtitle: '${subtitle}',
            },
          }),
        );
      });
    </script>
  `;
};
export const Normal = Template.bind({});
Normal.args = {};

export const Info = Template.bind({});
Info.args = {
  state: "info",
};

export const Success = Template.bind({});
Success.args = {
  state: "success",
};

export const Warning = Template.bind({});
Warning.args = {
  state: "warning",
};

export const Error = Template.bind({});
Error.args = {
  state: "error",
};
