import { Meta } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { Story } from "../../../utils/types";

interface ProgressRingComponentArgs {
  radius: number;
  stroke: number;
  progress: number;
  progressColor: string;
  outlineColor: string;
  indeterminate: boolean;
}

interface HTMLAmalitechProgressRingElement extends HTMLElement {
  progress: number;
}

export default {
  title: "Components/Progress Ring",
  component: "amalitech-progress-ring",
  tags: ["autodocs"],
  argTypes: {
    progressColor: { control: "color" },
    outlineColor: { control: "color" },
  },
  decorators: [withActions],
} as Meta;

const Template: Story<ProgressRingComponentArgs> = (args) => {
  const radius = args.radius ? `radius="${args.radius}"` : "";
  const stroke = args.stroke ? `stroke="${args.stroke}"` : "";
  const progress = args.progress ? `progress="${args.progress}"` : "";
  const progressColor = args.progressColor
    ? `progress-color="${args.progressColor}"`
    : "";
  const outlineColor = args.outlineColor
    ? `outline-color="${args.outlineColor}"`
    : "";

  const component = document.querySelector(
    "amalitech-progress-ring"
  ) as HTMLAmalitechProgressRingElement;
  setInterval(() => {
    if (component) {
      component.progress = Math.floor(Math.random() * 100);
    }
  }, 2000);

  if (args.indeterminate) {
    return `
    <amalitech-progress-ring 
      indeterminate progress="30" progress-text="Loading..." radius="65" stroke="6" 
      style="--progress-text-size: 1rem"
    ></amalitech-progress-ring>
   `;
  }

  return `
        <amalitech-progress-ring ${radius} ${stroke} ${progress} ${progressColor} ${outlineColor}></amalitech-progress-ring>
    `;
};

export const Standard = Template.bind({});

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  indeterminate: true,
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  radius: 100,
  stroke: 20,
  progress: 40,
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  progressColor: "gold",
  outlineColor: "#d8dae5",
  progress: 30,
};
