import { Meta } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { Story } from "../../../utils/types";

interface CardComponentArgs {
  color: string;
  backgroundColor: string;
  disabled: boolean;
  href: string;
  target: string;
  withHoverAnimation: boolean;
}

export default {
  title: "Components/Card",
  tags: ["autodocs"],
  component: "amalitech-card",
  decorators: [withActions],
} as Meta;

const Template: Story<CardComponentArgs> = (args) => {
  const color = args.color ? args.color : "";
  const backgroundColor = args.backgroundColor ? args.backgroundColor : "";
  const disabled = args.disabled ? "disabled" : "";
  const href = args.href ? `href=${args.href}` : "";
  const target = args.target ? `target=${args.target}` : "";
  const withHoverAnimation = args.withHoverAnimation
    ? "with-hover-animation"
    : "";

  return `
  <amalitech-card style="width: 30rem; color: ${color}; background-color: ${backgroundColor};"
    ${disabled} ${href} ${target} ${withHoverAnimation}  
  >
    <div slot="header">This is the header</div>
    <div slot="title" style="margin-left: 20px; margin-top: 10px">Title</div>
    <div slot="body">
      <div style="margin: 20px 0 0 0">Street Fighter</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium animi aut, beatae dolorum fuga ipsum iusto nemo, nostrum placeat quo reiciendis reprehenderit sed
        similique soluta tenetur ut veniam veritatis, vitae?
      </div>
    </div>
    <div slot="image">
      <img src="https://th.bing.com/th/id/OIP.ITJm4XqvDqr2scT1DvvbswAAAA?rs=1&pid=ImgDetMain" alt="" />
    </div>
  </amalitech-card>
  `;
};

export const Basic = Template.bind({});
Basic.args = {
  color: "white",
  backgroundColor: "#355c78",
  withHoverAnimation: true,
};

export const WithHoverAnimation = Template.bind({});
WithHoverAnimation.args = {
  color: "white",
  backgroundColor: "#355c78",
  withHoverAnimation: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  color: "white",
  backgroundColor: "#355c78",
  disabled: true,
};

export const WithHref = Template.bind({});
WithHref.args = {
  color: "white",
  backgroundColor: "#355c78",
  href: "https://www.amalitech.com",
};
