import { Meta } from "@storybook/web-components";
import { withActions } from "@storybook/addon-actions/decorator";
import { Story } from "../../../utils/types";

interface DataTableComponentArgs {
  paginate: boolean;
  sortable: boolean;
  actions: boolean;
  selectionType: string;
  headerAlignment: string;
}

export default {
  title: "Components/Data Table",
  tags: ["autodocs"],
  component: "amalitech-data-table",
  argTypes: {
    paginate: { control: "boolean" },
    sortable: { control: "boolean" },
    actions: { control: "boolean" },
    selectionType: {
      control: "radio",
      options: ["undefined", "checkbox"],
    },
    headerAlignment: {
      control: "radio",
      options: ["left", "center", "right"],
    },
  },
  parameters: {
    actions: {
      handles: [
        "table:table-select-change",
        "table:table-cell-click",
        "table:table-sort",
        "table:table-page",
      ],
    },
  },
  decorators: [withActions],
} as Meta;

const Template: Story<DataTableComponentArgs> = (args) => {
  const paginate = args.paginate ? "paginate" : "";
  const sortable = args.sortable ? 'sortable="true"' : "";
  const selectionType = args.selectionType
    ? `selection-type="${args.selectionType}"`
    : "";
  const headerAlignment = args.headerAlignment
    ? `header-alignment="${args.headerAlignment}"`
    : "";

  return `
    <amalitech-data-table key-field="_id" ${paginate} ${sortable} ${selectionType} ${headerAlignment} id="table"></amalitech-data-table>

    <br />
    <br />
    <div>
      <b>Cell Data :</b>
      <pre id="record"></pre>
    </div>
    <div><b>Column :</b> <span id="column"></span></div>
    <br />
    <div><b>Selected Rows :</b> <span id="selected-rows"></span></div>
    <br />

    <script>
      const $table = document.getElementById('table');

      $table.actions = [
        {
          icon: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" xml:space="preserve"><path fill="none" stroke="#474d66" stroke-width="2" stroke-miterlimit="10" d="M23 27H11c-1.1 0-2-.9-2-2V8h16v17c0 1.1-.9 2-2 2zm4-19H7m7 0V6c0-.6.4-1 1-1h4c.6 0 1 .4 1 1v2m-3 15V12m4 11V12m-8 11V12"/></svg>',

          callback: function (row) {
            // Find the index of the row to delete
            const indexToDelete = $table.data.findIndex(item => item._id === row._id);
            if (indexToDelete !== -1) {
              // Remove the row from the data array
              $table.data.splice(indexToDelete, 1);

              // Update the data in the table component
              $table.data = [...$table.data];

              // Emit event to update the table
              $table.tableSelectChange.emit({ value: [], isSelectAll: false });
            }
          },
        },
      ];

      // Events
      $table.addEventListener('table:table-cell-click', function (evt) {
        document.getElementById('record').innerText = JSON.stringify(evt.detail.record, null, 3);
        document.getElementById('column').innerText = evt.detail.column.label;
      });
      $table.addEventListener('table:table-select-change', function (evt) {
        document.getElementById('selected-rows').innerText = JSON.stringify(evt.detail.value, null, 4);
      });
    </script>
  `;
};

export const Standard = Template.bind({});
Standard.args = {
  sortable: false,
  paginate: false,
  actions: false,
  selectionType: "undefined",
  headerAlignment: "left",
};

export const Sortable = Template.bind({});
Sortable.args = {
  sortable: true,
  paginate: false,
  actions: false,
  selectionType: "undefined",
  headerAlignment: "left",
};

export const Selectable = Template.bind({});
Selectable.args = {
  sortable: true,
  paginate: false,
  actions: false,
  selectionType: "checkbox",
  headerAlignment: "left",
};

export const WithPagination = Template.bind({});
WithPagination.args = {
  sortable: false,
  paginate: true,
  actions: false,
  selectionType: "undefined",
  headerAlignment: "left",
};

export const HeaderLeftAlign = Template.bind({});
HeaderLeftAlign.args = {
  sortable: false,
  paginate: false,
  actions: false,
  selectionType: "undefined",
  headerAlignment: "left",
};

export const HeaderCenterAlign = Template.bind({});
HeaderCenterAlign.args = {
  sortable: false,
  paginate: false,
  actions: false,
  selectionType: "undefined",
  headerAlignment: "center",
};

export const HeaderRightAlign = Template.bind({});
HeaderRightAlign.args = {
  sortable: false,
  paginate: false,
  actions: false,
  selectionType: "undefined",
  headerAlignment: "right",
};
