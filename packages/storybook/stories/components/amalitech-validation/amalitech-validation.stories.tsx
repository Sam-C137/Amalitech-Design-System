import { Meta } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { Story } from "../../../utils/types";

interface ValidationComponentArgs {
  variant: string;
  autoClose: boolean;
  closeButtonType: string;
  transition: string;
  message: string;
  detail: string;
  closeSecs: string;
}

export default {
  title: "Components/Validation Feedback",
  tags: ["autodocs"],
  component: "amalitech-validation",
  parameters: {
    actions: {
      handles: ["amalitechClose"],
    },
  },
  decorators: [withActions],
} as Meta;

const Template: Story<ValidationComponentArgs, string | HTMLDivElement> = (
  args
) => {
  if (args.closeSecs) {
    const button = document.createElement("amalitech-button");
    button.setAttribute("variant", "primary");
    button.innerHTML = "Show Validation Feedback";
    const div = document.createElement("div");

    button.addEventListener("click", () => {
      const element = document.createElement("amalitech-validation");
      element.setAttribute("variant", args.variant);
      element.setAttribute("close-button-type", args.closeButtonType);
      element.setAttribute("transition", args.transition);
      element.setAttribute("close-secs", args.closeSecs);
      element.style.position = "absolute";
      element.style.top = "0";
      element.style.width = "100%";

      element.innerHTML = `<span slot="message">${args.message}</span><span slot="detail">${args.detail}</span>`;
      div.appendChild(element);
    });
    div.appendChild(button);

    return div;
  }

  if (args.autoClose) {
    const button = document.createElement("amalitech-button");
    button.setAttribute("variant", "primary");
    button.innerHTML = "Show Validation Feedback";
    const div = document.createElement("div");

    button.addEventListener("click", () => {
      const element = document.createElement("amalitech-validation");
      element.setAttribute("variant", args.variant);
      element.setAttribute("close-button-type", args.closeButtonType);
      element.setAttribute("transition", args.transition);
      element.setAttribute("auto-close", "true");
      element.style.position = "absolute";
      element.style.top = "0";
      element.style.width = "100%";

      element.innerHTML = `<span slot="message">${args.message}</span><span slot="detail">${args.detail}</span>`;
      div.appendChild(element);
    });
    div.appendChild(button);

    return div;
  }

  return `<amalitech-validation variant="${args.variant}" close-button-type="${args.closeButtonType}"  transition="${args.transition}">
        <span slot="message">${args.message}</span>
        <span slot="detail">${args.detail}</span>
        </amalitech-validation>`;
};

export const Default = Template.bind({});
Default.args = {
  variant: "error",
  autoClose: false,
  closeButtonType: "arms",
  transition: "none",
  message: "Login failed",
  detail: "Credentials do not match",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  autoClose: false,
  closeButtonType: "arms",
  transition: "none",
  message: "Login successful",
  detail: "Welcome back",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  autoClose: false,
  closeButtonType: "arms",
  transition: "none",
  message: "Do you want to continue?",
  detail: "You are not a registered user",
};

export const AutoClose = Template.bind({});
AutoClose.args = {
  variant: "error",
  autoClose: true,
  closeButtonType: "arms",
  transition: "none",
  message: "Login failed",
  detail: "Credentials do not match",
};

export const XCloseButtonType = Template.bind({});
XCloseButtonType.args = {
  variant: "error",
  autoClose: false,
  closeButtonType: "x",
  transition: "none",
  message: "Login failed",
  detail: "Credentials do not match",
};

export const ArmsCloseButtonType = Template.bind({});
ArmsCloseButtonType.args = {
  variant: "error",
  autoClose: false,
  closeButtonType: "arms",
  transition: "none",
  message: "Login failed",
  detail: "Credentials do not match",
};

export const SquareCloseButtonType = Template.bind({});
SquareCloseButtonType.args = {
  variant: "error",
  autoClose: false,
  closeButtonType: "square",
  transition: "none",
  message: "Login failed",
  detail: "Credentials do not match",
};

export const XRoundedCloseButtonType = Template.bind({});
XRoundedCloseButtonType.args = {
  variant: "error",
  autoClose: false,
  closeButtonType: "x-rounded",
  transition: "none",
  message: "Login failed",
  detail: "Credentials do not match",
};

export const NoCloseButton = Template.bind({});
NoCloseButton.args = {
  variant: "error",
  autoClose: false,
  closeButtonType: "none",
  transition: "none",
  message: "Login failed",
  detail: "Credentials do not match",
};

export const ToastTransition = Template.bind({});
ToastTransition.args = {
  variant: "error",
  autoClose: true,
  closeButtonType: "arms",
  transition: "toast",
  message: "Login failed",
  detail: "Credentials do not match",
};

export const OpacityTransition = Template.bind({});
OpacityTransition.args = {
  variant: "error",
  autoClose: true,
  closeButtonType: "arms",
  transition: "opacity",
  message: "Login failed",
  detail: "Credentials do not match",
};

export const CustomSecondsToClose = Template.bind({});
CustomSecondsToClose.args = {
  variant: "success",
  closeButtonType: "none",
  transition: "opacity",
  closeSecs: "10",
  message: "Success!",
  detail: "Closing after 10 seconds",
};
