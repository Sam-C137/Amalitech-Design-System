import { Meta } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { Story } from "../../../utils/types";

interface StarRatingComponentArgs {
  count: number;
  value: number;
  readonly: boolean;
  strokeColor: string;
  size: string;
  hoverDisabled: boolean;
  disabled: boolean;
  animated: boolean;
}

export default {
  title: "Components/Star Rating",
  tags: ["autodocs"],
  component: "amalitech-star-rating",
  parameters: {
    actions: {
      handles: ["amalitechRatingChange"],
    },
  },
  decorators: [withActions],
} as Meta;

const Template: Story<StarRatingComponentArgs, HTMLElement | string> = (
  args
) => {
  const count = args.count ? `count="${args.count}"` : "";
  const value = args.value ? `value="${args.value}"` : "";
  const readonly = args.readonly ? `readonly` : "";
  const strokeColor = args.strokeColor
    ? `stroke-color="${args.strokeColor}"`
    : "";
  const size = args.size ? `size="${args.size}"` : "";
  const hoverDisabled = args.hoverDisabled ? `hover-disabled` : "";
  const disabled = args.disabled ? `disabled` : "";

  if (args.animated) {
    const section = document.createElement("section");
    section.style.width = "100%";
    section.style.height = "100px";
    const container = document.createElement("div");
    section.appendChild(container);
    const star = document.createElement("amalitech-star-rating") as any;
    star.animated = true;
    container.appendChild(star);
    const button = document.createElement("amalitech-button") as any;
    button.variant = "primary";
    button.style.marginTop = "10px";
    button.style.marginLeft = "10px";
    button.innerText = "Render";
    section.appendChild(button);
    button.addEventListener("click", () => {
      container.innerHTML = "";
      const star = document.createElement("amalitech-star-rating") as any;
      star.animated = true;
      container.appendChild(star);
    });
    return section;
  } else {
    return `
    <amalitech-star-rating ${count} ${value} ${readonly} ${strokeColor} ${size} ${hoverDisabled} ${disabled}></amalitech-star-rating>
`;
  }
};

export const Default = Template.bind({});

export const Animated = Template.bind({});
Animated.args = {
  animated: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const HoverDisabled = Template.bind({});
HoverDisabled.args = {
  hoverDisabled: true,
};

export const ReadOnly = Template.bind({});
ReadOnly.args = {
  readonly: true,
  value: 4,
};

export const WithValue = Template.bind({});
WithValue.args = {
  value: 3,
};

export const WithCustomCount = Template.bind({});
WithCustomCount.args = {
  count: 7,
};

export const WithCustomStrokeColor = Template.bind({});
WithCustomStrokeColor.args = {
  strokeColor: "#ff0000",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};
