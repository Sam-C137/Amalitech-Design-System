import { Meta } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { Story } from "../../../utils/types";

interface ButtonComponentArgs {
  variant: string;
  size: string;
  iconOnly: boolean;
  showIcon: boolean;
  disabled: boolean;
  iconPosition: string;
  type: string;
}

export default {
  title: "Components/Button",
  tags: ["autodocs"],
  component: "amalitech-button",
  parameters: {
    actions: {
      handles: ["click"],
    },
  },
  decorators: [withActions],
} as Meta;

const Template: Story<ButtonComponentArgs> = (args) => {
  const BgCondition =
    args.variant === "tertiary" ||
    args.variant === "light" ||
    args.variant === "secondary" ||
    args.variant === "default";
  const sizeCondition = args.size === "small";
  const icon = `<svg xmlns="http://www.w3.org/2000/svg" width="${
    sizeCondition ? "20" : "24"
  }" height="${sizeCondition ? "20" : "24"}" viewBox="0 0 24 24" fill="none">
         <g clip-path="url(#clip0_1_2569)">
           <path d="M14.4297 5.92969L20.4997 11.9997L14.4297 18.0697" stroke="${
             BgCondition ? "#696F8C" : "#FFFFFF"
           }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
           <path d="M3.5 12H20.33" stroke="${
             BgCondition ? "#696F8C" : "#FFFFFF"
           }" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
         </g>
         <defs>
           <clipPath id="clip0_1_2569">
             <rect width="24" height="24" fill="white" />
           </clipPath>
         </defs>
       </svg>`;
  if (args.iconOnly) {
    return `<amalitech-button variant="${args.variant}" icon-position="${
      args.iconPosition || "right"
    }" size="${args.size || "medium"}" disabled="${
      args.disabled || false
    }" type="${args.type || "button"}" >${icon}</amalitech-button>`;
  } else if (!args.showIcon) {
    return `<amalitech-button variant="${args.variant}" icon-position="${
      args.iconPosition || "right"
    }" size="${args.size || "medium"}" disabled="${
      args.disabled || false
    }" type="${args.type || "button"}" >Click Me</amalitech-button>`;
  } else {
    return `<amalitech-button variant="${args.variant}" icon-position="${
      args.iconPosition || "right"
    }" size="${args.size || "medium"}" disabled="${
      args.disabled || false
    }" type="${args.type || "button"}">${icon} Click Me</amalitech-button>`;
  }
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  showIcon: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  showIcon: true,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: "tertiary",
  showIcon: true,
};

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  showIcon: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  variant: "primary",
  disabled: true,
  showIcon: true,
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  variant: "primary",
  iconOnly: true,
};

export const TextOnly = Template.bind({});
TextOnly.args = {
  variant: "primary",
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  variant: "primary",
  iconPosition: "left",
  showIcon: true,
};

export const Large = Template.bind({});
Large.args = {
  variant: "primary",
  size: "large",
  showIcon: true,
};

export const Small = Template.bind({});
Small.args = {
  variant: "primary",
  size: "small",
  showIcon: true,
};
