import { Meta } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { Story } from "../../../utils/types";

interface BreadcrumbComponentArgs {
  separator: string;
  size: string;
  align: string;
}

export default {
  title: "Components/Breadcrumb",
  tags: ["autodocs"],
  component: "amalitech-breadcrumb",
  decorators: [withActions],
} as Meta;

const Template: Story<BreadcrumbComponentArgs> = (args) => {
  const size = args.size ? args.size : "";
  const separator = args.separator ? args.separator : "";
  const align = args.align ? args.align : "";

  return `
        <amalitech-breadcrumb separator="${separator}" size="${size}" align="${align}">
            <amalitech-breadcrumb-item href="https://google.com/" target="_blank">Home</amalitech-breadcrumb-item>
            <amalitech-breadcrumb-item active href="/">Users</amalitech-breadcrumb-item>
        </amalitech-breadcrumb>
    `;
};

export const Arrow = Template.bind({});
Arrow.args = {
  separator: "arrow",
};

export const Dot = Template.bind({});
Dot.args = {
  separator: "dot",
};

export const Slash = Template.bind({});
Slash.args = {
  separator: "slash",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const Left = Template.bind({});
Left.args = {
  align: "left",
};

export const Right = Template.bind({});
Right.args = {
  align: "right",
};

export const Center = Template.bind({});
Center.args = {
  align: "center",
};
