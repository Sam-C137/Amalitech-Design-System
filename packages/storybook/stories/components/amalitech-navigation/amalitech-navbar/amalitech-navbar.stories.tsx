import { Meta } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { Story } from "../../../../utils/types";

interface NavbarComponentArgs {
  logo: boolean;
  navItems: string[];
  search: boolean;
  layout: string;
  mobileIconAlign: string;
  activeItem: number;
  disabledItem: number;
}

export default {
  title: "Components/Navbar",
  tags: ["autodocs"],
  component: "amalitech-navbar",
  decorators: [withActions],
} as Meta;

const Template: Story<NavbarComponentArgs> = (args) => {
  const layout = args.layout ? `layout="${args.layout}"` : "";
  const mobileIconAlign = args.mobileIconAlign
    ? `mobile-icon-align="${args.mobileIconAlign}"`
    : "";
  const logo = args.logo
    ? `<a href="https://amalitech.com/" slot="logo" style="font-size: 1.2rem; font-weight: 600; color: #000; text-decoration: none;">AMALIT<span style="color: #dd5928;">E</span>CH</a>`
    : "";
  const search = args.search
    ? `<input  slot="search"  type="search" placeholder="search..." style="border: 1px solid #000; border-radius: 5px; font-size: 1rem; padding: 6px 12px;">`
    : "";
  const navItems = args.navItems
    ? args.navItems
        .map((item, index) => {
          if (index + 1 === args.activeItem) {
            return `<amalitech-nav-item active>${item}</amalitech-nav-item>`;
          } else if (index + 1 === args.disabledItem) {
            return `<amalitech-nav-item disabled>${item}</amalitech-nav-item>`;
          } else {
            return `<amalitech-nav-item>${item}</amalitech-nav-item>`;
          }
        })
        .join("")
    : "";

  return `
        <amalitech-navbar ${layout} ${mobileIconAlign} style="margin-left:-18px;">
        ${logo}
        ${navItems}
        ${search}
        </amalitech-navbar>
        `;
};

export const Default = Template.bind({});
Default.args = {
  logo: true,
  navItems: ["Home", "About", "Contact"],
  search: true,
  layout: "nav-items-center",
  mobileIconAlign: "right",
};

export const LayoutNavItemsRight = Template.bind({});
LayoutNavItemsRight.args = {
  logo: true,
  navItems: ["Home", "About", "Contact"],
  search: true,
  layout: "nav-items-right",
  mobileIconAlign: "right",
};

export const LayoutNavItemsLeft = Template.bind({});
LayoutNavItemsLeft.args = {
  logo: true,
  navItems: ["Home", "About", "Contact"],
  search: true,
  layout: "nav-items-left",
  mobileIconAlign: "right",
};

export const WithoutLogo = Template.bind({});
WithoutLogo.args = {
  navItems: ["Home", "About", "Contact"],
  search: true,
  layout: "nav-items-center",
  mobileIconAlign: "right",
};

export const WithoutSearch = Template.bind({});
WithoutSearch.args = {
  logo: true,
  navItems: ["Home", "About", "Contact"],
  layout: "nav-items-center",
  mobileIconAlign: "right",
};

export const WithoutLogoAndSearch = Template.bind({});
WithoutLogoAndSearch.args = {
  navItems: ["Home", "About", "Contact"],
  layout: "nav-items-center",
  mobileIconAlign: "right",
};

export const ActiveRoute = Template.bind({});
ActiveRoute.args = {
  logo: true,
  navItems: ["Home", "About", "Contact"],
  search: true,
  layout: "nav-items-center",
  mobileIconAlign: "right",
  activeItem: 1,
};

export const DisabledRoute = Template.bind({});
DisabledRoute.args = {
  logo: true,
  navItems: ["Home", "About", "Contact"],
  search: true,
  layout: "nav-items-center",
  mobileIconAlign: "right",
  disabledItem: 3,
};

export const Mobile = Template.bind({});
Mobile.args = {
  logo: true,
  navItems: ["Home", "About", "Contact"],
  search: true,
  layout: "nav-items-center",
  mobileIconAlign: "right",
  mobile: true,
};
Mobile.parameters = {
  viewport: {
    viewports: {
      ...INITIAL_VIEWPORTS,
      mobile: {
        name: "mobile",
        styles: {
          width: "375px",
          height: "812px",
          marigin: "0",
          padding: "0",
        },
      },
    },
    defaultViewport: "mobile",
  },
};
