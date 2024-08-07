import { Meta } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { Story } from "../../../utils/types";

interface PaginationComponentArgs {
  totalItems: number;
  pageNumber: number;
  limitNumber: number;
  siblings: number;
  size: "small" | "large";
}

export default {
  title: "Components/Pagination",
  tags: ["autodocs"],
  component: "amalitech-pagination",
  parameters: {
    actions: {
      handles: ["amalitechPageChange"],
    },
  },
  decorators: [withActions],
} as Meta;

const Template: Story<PaginationComponentArgs> = (args) => {
  const totalItems = args.totalItems ? `total-items="${args.totalItems}"` : "";
  const pageNumber = args.pageNumber ? `page-number="${args.pageNumber}"` : "";
  const limitNumber = args.limitNumber
    ? `limit-number="${args.limitNumber}"`
    : "";
  const siblings = args.siblings ? `siblings="${args.siblings}"` : "";
  const size = args.size ? `size="${args.size}"` : "";

  return `
        <amalitech-pagination ${totalItems} ${pageNumber} ${limitNumber} ${siblings} ${size}></amalitech-pagination>
    `;
};

export const Standard = Template.bind({});

export const Small = Template.bind({});
Small.args = {
  size: "small",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
};

export const WithTotalItems = Template.bind({});
WithTotalItems.args = {
  totalItems: 300,
  limitNumber: 10,
};

export const WithPageNumber = Template.bind({});
WithPageNumber.args = {
  pageNumber: 3,
};

export const Withsiblings = Template.bind({});
Withsiblings.args = {
  siblings: 2,
};
