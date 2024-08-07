import { Meta } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { Story } from "../../../../utils/types";

interface TreeNodeComponentArgs {
  disabled: boolean;
  expanded: boolean;
  label: string;
  href: string;
}

export default {
  title: "Components/Tree/Tree Node",
  tags: ["autodocs"],
  component: "amalitech-tree-node",
  decorators: [withActions],
} as Meta;

const Template: Story<TreeNodeComponentArgs> = (args) => {
  const expanded = args.expanded ? "expanded" : "";
  const disabled = args.disabled ? "disabled" : "";
  const label = args.label ? `${args.label}` : "Artificial Intelligence";
  const href = args.href ? `href="${args.href}"` : "";

  return `
    <amalitech-tree-node ${disabled} ${expanded} ${href} label="${label}"></amalitech-tree-node>
  `;
};

export const TreeNode = Template.bind({});
TreeNode.args = {
  disabled: false,
  expanded: false,
  label: "",
  href: "",
};
