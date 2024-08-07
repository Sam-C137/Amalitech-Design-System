import { Component, Element, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';
import { throttle } from '../../utils/utils';
import { Action } from './table-interface';

const DEFAULT_CELL_WIDTH = 16; // in rem
const ACTION_WIDTH = 5.5; // in rem

@Component({
  tag: 'amalitech-data-table',
  styleUrl: 'amalitech-data-table.scss',
  shadow: true,
})
export class AmalitechDataTable {
  @Element() elm!: HTMLAmalitechDataTableElement;

  /**
   * Columns configuration.
   * [
   * {
   *   "name":"name",
   *   "label":"Name",
   *   "width":300,
   *   "fixed":true,
   *   "template": function(row, column) { return row[column.name];}
   *  },
   * {
   *   "name":"age",
   *   "label":"Age"
   * }
   * ]
   */
  @Prop() columns: any[] = [
    {
      name: 'name',
      label: 'Name',
    },
    {
      name: 'age',
      label: 'Age',
    },
    {
      name: 'company',
      label: 'Company',
    },
  ];

  /**
   * Data to display on table
   * [{
   *  'id': '5',
   *  'age': 21,
   *  'name': 'John',
   *  'company': 'India',
   *  'email': 'john@example.com',
   *  'phone': '+23356977855',
   *  'address': '326 Irving Street, Ghana'
   *  }]
   */
  @Prop() data: any[] = [
    {
      _id: '1',
      index: 0,
      age: 21,
      name: 'Courtney Courtney',
      company: 'XYQAG',
    },
    {
      _id: '2',
      index: 1,
      age: 34,
      name: 'Wilcox',
      company: 'STRALOY',
    },
    {
      _id: '3',
      index: 2,
      age: 22,
      name: 'Lucas',
      company: 'LUNCHPOD',
    },
    {
      _id: '4',
      index: 3,
      age: 23,
      name: 'David',
      company: 'VELOS',
    },
    {
      _id: '5',
      index: 4,
      age: 30,
      name: 'Dorothea',
      company: 'ZILLAN',
    },
    {
      _id: '6',
      index: 5,
      age: 25,
      name: 'Guy',
      company: 'ISOTERNIA',
    },
    {
      _id: '7',
      index: 6,
      age: 25,
      name: 'Gary',
      company: 'ISOTERNIA',
    },
    {
      _id: '8',
      index: 7,
      age: 25,
      name: 'Payton',
      company: 'ISOTERNIA',
    },
  ];

  /**
   * Type of selection ('checkbox' or undefined).
   */
  @Prop() selectionType: 'checkbox' | undefined;

  /**
   * Selected row keys.
   */
  @Prop({ mutable: true }) selectedRowKeys: string[] = [];

  /**
   * Key field to uniquely identify each row.
   * @default 'id'
   */
  @Prop() keyField: string = 'id';

  /**
   *
   */
  @Prop() managed: boolean = false;

  /**
   * makes the table data sortable
   */
  @Prop() sortable: boolean = false;

  /**
   * sortable string
   */
  @Prop({ mutable: true }) sortBy: string;

  /**
   * changes the sort direction
   */
  @Prop({ mutable: true }) sortOrder: 'asc' | 'desc' = 'asc';

  /**
   * add pagination to the page
   */
  @Prop() paginate: boolean = false;

  /**
   *
   */
  @Prop({ mutable: true }) page: number = 1;

  /**
   * changes the amount of items on each page | pagination
   */
  @Prop() pageSize: number = 5;

  /**
   * Total number of items in the data set.
   * @default undefined
   */
  @Prop() totalItems: any;

  /**
   * Headline text to display when the table is empty.
   * @default 'No items'
   */
  @Prop() emptyStateHeadline: string = 'No items';

  /**
   * Description text to display when the table is empty.
   * @default 'There are no items to display'
   */
  @Prop() emptyStateDescription: string = 'There are no items to display';

  /**
   * Alignment of the table header ('center', 'left', or 'right').
   * @default 'left'
   */
  @Prop() headerAlignment: 'center' | 'left' | 'right' = 'left';

  /**
   * actions to be performed on each row
   * [{
   *  'icon': '<svg></svg>',
   *  'callback': () => {},
   *  }]
   */
  @Prop() actions: Action[] = [];

  //States
  /**
   * Current hovered cell.
   * @type {Object}
   */
  @State() private hoveredCell: any = {};

  /**
   * Whether all rows are selected.
   * @type {boolean}
   */
  @State() private isSelectAll: boolean = false;

  /**
   * Whether selection is in an intermediate state.
   * @type {boolean}
   */
  @State() private isSelectAllIntermediate: boolean = false;

  /**
   * Whether the table is horizontally scrolled.
   * @type {boolean}
   */
  @State() private isHorizontallyScrolled: boolean = false;

  /**
   * Emitted when a cell is clicked.
   * @event table:table-cell-click
   * @property {Object} detail - The event detail.
   * @property {Object} detail.record - The clicked row.
   * @property {Object} detail.column - The clicked column.
   * @property {boolean} detail.altKey - Whether the Alt key was pressed during the click.
   * @property {boolean} detail.ctrlKey - Whether the Ctrl key was pressed during the click.
   * @property {boolean} detail.metaKey - Whether the Meta key was pressed during the click.
   * @property {boolean} detail.shiftKey - Whether the Shift key was pressed during the click.
   */
  @Event({ eventName: 'table:table-cell-click' }) tableCellClick: EventEmitter;

  /**
   * Emitted when the selection changes.
   * @event table:table-select-change
   * @property {Object} detail - The event detail.
   * @property {string[]} detail.value - The keys of selected rows.
   * @property {boolean} detail.isSelectAll - Whether all rows are selected.
   */
  @Event({ eventName: 'table:table-select-change' }) tableSelectChange: EventEmitter;

  /**
   * Emitted when sorting is applied to the table.
   * @event table:table-sort
   * @property {Object} detail - The event detail.
   * @property {string} detail.sortBy - The column name to sort by.
   * @property {'asc' | 'desc'} detail.sortOrder - The sorting order ('asc' or 'desc').
   */
  @Event({ eventName: 'table:table-sort' }) tableSort: EventEmitter;

  /**
   * Emitted when pagination is changed.
   * @event table:table-page
   * @property {Object} detail - The event detail.
   * @property {number} detail.page - The current page number.
   * @property {number} detail.pageSize - The number of items per page.
   */
  @Event({ eventName: 'table:table-page' }) tablePage: EventEmitter;

  private onSelectAllClick = () => {
    let selectedRowKeys = [];
    this.isSelectAll = !this.isSelectAll;
    if (this.isSelectAll) {
      selectedRowKeys = this.data.map(row => row[this.keyField]);
    }
    this.onSelectChange(selectedRowKeys);
  };

  private onRowSelectClick = (row: any) => {
    let selectedRowKeys = [...this.selectedRowKeys];
    const rowIndex = selectedRowKeys.indexOf(row[this.keyField]);
    if (rowIndex !== -1) {
      selectedRowKeys.splice(rowIndex, 1);
    } else {
      selectedRowKeys.push(row[this.keyField]);
    }
    this.onSelectChange(selectedRowKeys);
  };

  private onCellMouseOver = throttle(
    (row: any, column: any) => {
      this.hoveredCell = { row, column };
    },
    30,
    {
      leading: true,
      trailing: false,
    },
  );

  private onSelectChange(selectedRowKeys: any) {
    this.selectedRowKeys = selectedRowKeys;
    this.tableSelectChange.emit({ value: this.selectedRowKeys, isSelectAll: this.isSelectAll });
  }

  private onCellClick(row: any, col: any, evt: MouseEvent) {
    this.tableCellClick.emit({
      record: row,
      column: col,
      altKey: evt.altKey,
      ctrlKey: evt.ctrlKey,
      metaKey: evt.metaKey,
      shiftKey: evt.shiftKey,
    });
  }

  private renderHeader() {
    const fixedCols = [];
    const scrollCols: any = [];

    if (this.selectionType === 'checkbox') {
      fixedCols.push(
        <div class="col col-checkbox center">
          <div class="col-content">
            <input type="checkbox" class="checkbox" checked={this.isSelectAll} indeterminate={this.isSelectAllIntermediate} onChange={this.onSelectAllClick} />
          </div>
        </div>,
      );
    }
    this.columns.forEach(col => {
      let colWidth = DEFAULT_CELL_WIDTH;
      if (col.width) colWidth = parseInt(col.width);
      const colEl = (
        <div class={{ col: true, sort: this.sortBy === col.name }} style={{ width: colWidth + 'rem', textAlign: this.headerAlignment }}>
          <div class="col-content">
            <div class="col-text">{col.label}</div>
            <div class="col-actions">
              {(() => {
                if (!this.sortable) return;
                let icon = '↓↑';
                if (this.sortBy === col.name) {
                  if (this.sortOrder === 'asc') icon = '↑';
                  else icon = '↓';
                }
                return (
                  <button
                    class="col-action sort-icon"
                    color="dark"
                    dark-mode-color="light"
                    onClick={() => {
                      if (this.sortBy === col.name) {
                        if (this.sortOrder === 'asc') this.sortOrder = 'desc';
                        else this.sortBy = '';
                      } else {
                        this.sortBy = col.name;
                        this.sortOrder = 'asc';
                      }
                      this.tableSort.emit({ sortBy: this.sortBy, sortOrder: this.sortOrder });
                    }}
                  >
                    {icon}
                  </button>
                );
              })()}
            </div>
          </div>
        </div>
      );
      col.fixed ? fixedCols.push(colEl) : scrollCols.push(colEl);
    });

    const actionsHeader = (
      <div class={{ 'col': true, 'col-actions': true }} style={{ width: ACTION_WIDTH + 'rem', textAlign: this.headerAlignment }}>
        <div class="col-content">
          <div class="col-text">Actions</div>
        </div>
      </div>
    );

    return (
      <div class="header">
        <div class="row">
          <div class="fixed-columns columns-container">{fixedCols}</div>
          <div class="scrollable-columns columns-container">
            {scrollCols}
            {this.actions && actionsHeader}
          </div>
        </div>
      </div>
    );
  }

  private renderBody() {
    const rows: any = [];

    let data = [...this.data];

    if (!this.managed) {
      if (this.sortable && this.sortBy) {
        data = data.sort((a, b) => {
          if (a[this.sortBy] < b[this.sortBy]) return this.sortOrder === 'asc' ? -1 : 1;
          if (a[this.sortBy] > b[this.sortBy]) return this.sortOrder === 'asc' ? 1 : -1;
          return 0;
        });
      }
      if (this.paginate) {
        data = data.slice((this.page - 1) * this.pageSize, this.page * this.pageSize);
      }
    }

    data.forEach(row => {
      const fixedCols = [];
      const scrollCols: any = [];

      if (this.selectionType === 'checkbox')
        fixedCols.push(
          <div class={{ 'col': true, 'center': true, 'col-checkbox': true }}>
            <div class="col-content">
              <input type="checkbox" class="checkbox" checked={this.selectedRowKeys.includes(row[this.keyField])} onChange={() => this.onRowSelectClick(row)} />
            </div>
          </div>,
        );

      this.columns.forEach(column => {
        let colWidth = DEFAULT_CELL_WIDTH;
        if (column.width) colWidth = parseInt(column.width);
        const colEl = (
          <div
            tabindex="1"
            class={{ 'col': true, 'col-hover': this.hoveredCell.row === row && this.hoveredCell.column === column }}
            style={{ width: colWidth + 'rem' }}
            onMouseOver={() => {
              // @ts-ignore
              this.onCellMouseOver(row, column);
            }}
            onKeyDown={event => {
              if ((event.ctrlKey || event.metaKey) && event.key === 'c') {
                const elem: any = event.target;
                window.navigator.clipboard.writeText(elem.innerText);
              }
            }}
            onClick={(evt: MouseEvent) => {
              const selection = window.getSelection();
              if (selection?.type != 'Range') this.onCellClick(row, column, evt);
            }}
          >
            <div class="col-content">
              {(() => {
                if (column.template) return <div class="col-template" innerHTML={column.template(row, column)}></div>;
                else
                  return (
                    <div class="col-text" title={row?.[column.name]}>
                      {row?.[column.name]}
                    </div>
                  );
              })()}
            </div>
          </div>
        );

        column.fixed ? fixedCols.push(colEl) : scrollCols.push(colEl);
      });

      const actionsCol = (
        <div class="col col-actions actions-svg-icon" style={{ width: DEFAULT_CELL_WIDTH + 'rem' }}>
          {this.actions.map(action => (
            <div class="action-icon" onClick={() => action.callback(row)}>
              <div innerHTML={action.icon}></div>
            </div>
          ))}
        </div>
      );

      rows.push(
        <div class={{ 'row': true, 'row-hover': this.hoveredCell.row === row }}>
          <div class="fixed-columns columns-container">{fixedCols}</div>
          <div class="scrollable-columns columns-container">{scrollCols}</div>
          {actionsCol}
        </div>,
      );
    });

    return <div class="body">{rows}</div>;
  }

  private getTotalItems() {
    let totalItems = this.totalItems;
    if (this.paginate && !this.managed) totalItems = this.data.length;
    return totalItems;
  }

  private renderPagination() {
    if (this.paginate)
      return (
        <div class="pagination">
          <div class="page-sizes-select">
            <div class="flex">
              <p>Items per page:</p>
              <div class="separator"></div>
              <select
                class="select"
                onChange={(e: any) => {
                  this.pageSize = e.target.options[e.target.selectedIndex].value;
                  this.tablePage.emit({ page: this.page, pageSize: this.pageSize });
                }}
              >
                <option selected value="5">
                  5
                </option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>
            </div>
          </div>
          <div class="pagination-item-count">
            <h1 style={{ display: 'inline', color: '#474d66' }}>
              {this.pageSize * (this.page - 1)} - {this.pageSize * this.page < this.getTotalItems() ? this.pageSize * this.page : this.getTotalItems()} of {this.getTotalItems()}{' '}
              items
            </h1>
          </div>
          <div class="pagination-right">
            <div class="table-footer-right-content">
              <div class="table-footer-right-content-pagination">
                <button
                  class="arrows pag-icon"
                  color="dark"
                  disabled={this.page === 1}
                  onClick={() => {
                    this.page = this.page - 1;
                    this.tablePage.emit({ page: this.page, pageSize: this.pageSize });
                  }}
                >
                  {this.page === 1 ? (
                    <svg width="15" height="15" viewBox="0 0 24 24" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line">
                      <path style={{ stroke: 'gray', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2' }} d="M3 12h18" />
                      <path data-name="primary" style={{ fill: 'none', stroke: 'gray', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2' }} d="m10 19-7-7 7-7" />
                    </svg>
                  ) : (
                    <svg width="15" height="15" viewBox="0 0 24 24" data-name="Flat Line" xmlns="http://www.w3.org/2000/svg" class="icon flat-line">
                      <path style={{ stroke: '#000', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2' }} d="M3 12h18" />
                      <path data-name="primary" style={{ fill: 'none', stroke: '#000', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '2' }} d="m10 19-7-7 7-7" />
                    </svg>
                  )}
                </button>
                <button
                  color="dark"
                  class="arrows pag-icon"
                  disabled={this.pageSize * this.page >= this.getTotalItems()}
                  onClick={() => {
                    this.page = this.page + 1;
                    this.tablePage.emit({ page: this.page, pageSize: this.pageSize });
                  }}
                >
                  {this.pageSize * this.page >= this.getTotalItems() ? (
                    <svg width="15" height="15" viewBox="0 0 24 24" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color">
                      <path
                        d="m21.71 11.29-7-7a1 1 0 0 0-1.42 1.42l5.3 5.29H3a1 1 0 0 0 0 2h15.59l-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l7-7a1 1 0 0 0 0-1.42"
                        style={{ fill: 'gray' }}
                      />
                    </svg>
                  ) : (
                    <svg width="15" height="15" viewBox="0 0 24 24" data-name="Flat Color" xmlns="http://www.w3.org/2000/svg" class="icon flat-color">
                      <path
                        d="m21.71 11.29-7-7a1 1 0 0 0-1.42 1.42l5.3 5.29H3a1 1 0 0 0 0 2h15.59l-5.3 5.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l7-7a1 1 0 0 0 0-1.42"
                        style={{ fill: '#000' }}
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      );
  }

  render() {
    return (
      <Host>
        <div
          class={{
            'table': true,
            'sortable': this.sortable,
            'paginate': this.paginate,
            'horizontal-scrolled': this.isHorizontallyScrolled,
          }}
        >
          <div
            class="table-scroll-container"
            onScroll={event => {
              // @ts-ignore
              this.isHorizontallyScrolled = !!event.target.scrollLeft;
            }}
          >
            {this.renderHeader()}
            {this.data.length ? this.renderBody() : this.renderEmptyState()}
          </div>
          <div class="table-footer">{this.renderPagination()}</div>
        </div>
      </Host>
    );
  }

  private renderEmptyState() {
    return (
      <div class="empty-table">
        <div class="empty-state content-center">
          <h1>{this.emptyStateHeadline}</h1>
          <p>{this.emptyStateDescription}</p>
        </div>
      </div>
    );
  }
}
