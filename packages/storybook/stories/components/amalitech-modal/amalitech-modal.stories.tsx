import { Meta } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { Story } from "../../../utils/types";

interface ModalComponentArgs {
  header: string;
  textContent: string;
  cancelText: string;
  confirmText: string;
  closeButtonType: string;
  scrollable: boolean;
  confirmation: boolean;
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default {
  title: "Components/Modal",
  tags: ["autodocs"],
  component: "amalitech-modal",
  parameters: {
    actions: {
      handles: ["amalitechConfirm", "amalitechCancel"],
    },
  },
  decorators: [withActions],
} as Meta;

const Template: Story<ModalComponentArgs, HTMLDivElement> = (args) => {
  const component = document.createElement("amalitech-modal");

  const button = document.createElement("amalitech-button");
  button.setAttribute("variant", "primary");
  button.textContent = "Click to open the modal";
  button.addEventListener("click", () => {
    component.setAttribute("visible", "");
  });

  args.cancelText && component.setAttribute("cancel-text", args.cancelText);
  args.confirmText && component.setAttribute("confirm-text", args.confirmText);
  args.closeButtonType &&
    component.setAttribute("close-button-type", args.closeButtonType);
  args.scrollable && component.setAttribute("scrollable", "");
  args.confirmation && component.setAttribute("confirmation", "");
  args.visible && component.setAttribute("visible", "");

  if (args.textContent) {
    const content = document.createElement("div");
    content.innerHTML = args.textContent;
    component.appendChild(content);
  }
  if (args.header) {
    const header = document.createElement("span");
    header.setAttribute("slot", "header");
    header.innerHTML = args.header;
    component.appendChild(header);
  }

  const container = document.createElement("div");
  container.appendChild(button);
  container.appendChild(component);

  component.addEventListener("confirm", args.onConfirm);
  component.addEventListener("cancel", args.onCancel);

  return container;
};

export const BasicModal = Template.bind({});
BasicModal.args = {
  header: "Confirm details",
  textContent:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt expedita cupiditate a tempore hic explicabo aliquid quaerat inventore perspiciatis deleniti.",
};

export const ConfirmationModal = Template.bind({});
ConfirmationModal.args = {
  header: "Confirm details",
  textContent:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt expedita cupiditate a tempore hic explicabo aliquid quaerat inventore perspiciatis deleniti.",
  confirmation: true,
};

export const ScrollableModal = Template.bind({});
ScrollableModal.args = {
  header: "Confirm details",
  textContent:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quidem libero sed vitae voluptatem in aperiam illo accusantium expedita dolor blanditiis nisi reiciendis quis exercitationem beatae alias cupiditate sint aut sunt, nihil dignissimos eveniet ullam. Nulla in, minima tempore illo quo labore facilis illum, iure voluptatem, odit rerum. Error ipsa velit hic, exercitationem, corrupti animi praesentium quia vitae tempore natus sapiente amet eveniet suscipit dolorem totam! Perspiciatis sint, illum dolorem cumque eveniet beatae cum laboriosam expedita eligendi est officiis molestias? Sapiente, perferendis deleniti ipsa similique omnis nulla dignissimos, distinctio enim quo qui aliquid blanditiis quas veniam excepturi magnam velit vero ea beatae eveniet reprehenderit earum sit expedita accusantium! Accusamus veritatis cumque et, voluptates nulla expedita quos numquam consequuntur quam dolor.",
  scrollable: true,
};

export const CustomButtonTexts = Template.bind({});
CustomButtonTexts.args = {
  header: "Confirm details",
  textContent:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt expedita cupiditate a tempore hic explicabo aliquid quaerat inventore perspiciatis deleniti.",
  cancelText: "No",
  confirmText: "Yes",
};

export const CustomCloseButton = Template.bind({});
CustomCloseButton.args = {
  header: "Confirm details",
  textContent:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt expedita cupiditate a tempore hic explicabo aliquid quaerat inventore perspiciatis deleniti.",
  closeButtonType: "x-rounded",
};
