import { Meta } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { Story } from "../../../utils/types";

interface TabComponentArgs {
  disabled: boolean;
  tabName1: string;
  tabName2: string;
  tabName3: string;
}

export default {
  title: "Components/Tab",
  tags: ["autodocs"],
  component: "amalitech-tab",
  decorators: [withActions],
} as Meta;

const Template: Story<TabComponentArgs> = (args) => {
  const disabled = args.disabled ? "disabled" : "";
  const tabName1 = args.tabName1 ? `tab-name="${args.tabName1}"` : "";
  const tabName2 = args.tabName2 ? `tab-name="${args.tabName2}"` : "";
  const tabName3 = args.tabName3 ? `tab-name="${args.tabName3}"` : "";

  return `
  <amalitech-tab active-index="1">
  <amalitech-tab-panel ${tabName1} ${disabled}>
    <p>
      This is the first tab's content
    </p>
  </amalitech-tab-panel>
  <amalitech-tab-panel ${tabName2} ${disabled}>
    <p>
      This is the second tab's content
    </p>
  </amalitech-tab-panel>
  <amalitech-tab-panel ${tabName3} ${disabled}>
    <p>
      This is the third tab's content
    </p>
  </amalitech-tab-panel>
</amalitech-tab>
    `;
};

export const Basic = Template.bind({});
Basic.args = {
  disabled: false,
  tabName1: "Tab 1",
  tabName2: "Tab 2",
  tabName3: "Tab 3",
};
