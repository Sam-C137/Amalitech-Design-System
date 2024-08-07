import { Meta } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { Story } from "../../../utils/types";

interface AccordionComponentArgs {
  label1: string;
  label2: string;
  description: string;
  animated: boolean;
}

export default {
  title: "Components/Accordion",
  tags: ["autodocs"],
  component: "amalitech-accordion",
  decorators: [withActions],
} as Meta;

const Template: Story<AccordionComponentArgs> = (args) => {
  const label1 = args.label1 ? args.label1 : "Item #1";
  const label2 = args.label2 ? args.label2 : "Item #2";
  const animated = args.animated ? "animated" : "";
  const description = args.description
    ? args.description
    : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid.";

  return `
    <amalitech-accordion
      label="${label1}"
      description="${description}"
      ${animated}
      ></amalitech-accordion>
      <amalitech-accordion
      label="${label2}"
      description="${description}"
      ${animated}
    ></amalitech-accordion>
  `;
};

export const Normal = Template.bind({});
Normal.args = {
  label1: "Item #1",
  label2: "Item #2",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aliquid.",
  animated: true,
};
