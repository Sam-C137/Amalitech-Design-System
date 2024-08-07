import { Meta } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { Story } from "../../../../utils/types";

interface TreeComponentArgs {
  disabled: boolean;
  expanded: boolean;
  selectedNode: string;
  label: string;
  label2: string;
  label3: string;
  label4: string;
  label5: string;
  href: string;
}

export default {
  title: "Components/Tree",
  tags: ["autodocs"],
  component: "amalitech-tree",
  parameters: {
    actions: {
      handles: ["tree:tree-node-click"],
    },
  },
  decorators: [withActions],
} as Meta;

const Template: Story<TreeComponentArgs> = (args) => {
  const expanded = args.expanded ? "expanded" : "";
  const disabled = args.disabled ? "disabled" : "";
  const label = args.label ? `${args.label}` : "Artificial Intelligence";
  const label2 = args.label2 ? `${args.label2}` : "Blockchain";
  const label3 = args.label3 ? `${args.label3}` : "Cloud computing";
  const label4 = args.label4 ? `${args.label4}` : "Containers";
  const label5 = args.label5 ? `${args.label5}` : "Databases";
  const href = args.href ? `href="${args.href}"` : "";
  const selectedNode = args.selectedNode
    ? `selected-node="${args.selectedNode}"`
    : 'selected-node="Containers"';

  return `
  <amalitech-tree id="tree" style="width: 500px" ${selectedNode}>
    <amalitech-tree-node ${href} label="${label}"></amalitech-tree-node>
    <amalitech-tree-node ${disabled} label="${label2}"></amalitech-tree-node>
    <amalitech-tree-node ${expanded} label="${label3}">
      <amalitech-tree-node label="${label4}"></amalitech-tree-node>
      <amalitech-tree-node label="${label5}"></amalitech-tree-node>
    </amalitech-tree-node>
  </amalitech-tree>


  <p id="data">.</p>
  <script>
  const tree = document.querySelectorAll('amalitech-tree');
  const data = document.querySelector('#data');
  tree.forEach(treeView =>
    treeView.addEventListener('tree:tree-node-click', function (evt) {
      data.innerHTML = JSON.stringify(evt.detail.value);
      console.log(JSON.stringify(evt.detail.value), 'tree:tree-node-click');
    }),
  );
</script>
  `;
};

export const Standard = Template.bind({});
Standard.args = {
  disabled: false,
  expanded: false,
  selectedNode: "Blockchain",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  expanded: false,
  selectedNode: "Blockchain",
};

export const Expanded = Template.bind({});
Expanded.args = {
  disabled: false,
  expanded: true,
  selectedNode: "Blockchain",
};

export const ChangeSelectedNode = Template.bind({});
ChangeSelectedNode.args = {
  disabled: false,
  expanded: false,
  selectedNode: "Artificial Intelligence",
};
