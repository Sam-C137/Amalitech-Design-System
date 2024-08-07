import { Meta } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { Story } from "../../../../utils/types";

interface NavItemComponentArgs {
  content: string;
  active: boolean;
  disabled: boolean;
}

export default {
  title: "Components/Navbar/Item",
  tags: ["autodocs"],
  component: "amalitech-nav-item",
  decorators: [withActions],
} as Meta;

const Template: Story<NavItemComponentArgs> = (args) => {
  const active = args.active ? `active` : "";
  const disabled = args.disabled ? `disabled` : "";
  return `<amalitech-navbar>
  <amalitech-nav-item ${active} ${disabled}>${args.content}</amalitech-nav-item>
  </amalitech-navbar>`;
};

export const Default = Template.bind({});
Default.args = {
  content: "Home",
  active: false,
  disabled: false,
};
