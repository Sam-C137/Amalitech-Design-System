import { Component, Prop, State, h, Event, EventEmitter, Element } from '@stencil/core';
import { getPaginationRange } from './utils';
import { PaginationIcons } from '../../utils/svg-icons';

@Component({
  tag: 'amalitech-pagination',
  styleUrl: 'amalitech-pagination.scss',
  shadow: true,
})
export class AmalitechPagination {
  @Element() el: HTMLAmalitechPaginationElement;
  /**
   * The total number of items in the data set
   */
  @Prop() totalItems: number = 100;
  /**
   * (optional) The total number of pages if you do not want the component to handle
   * calculating the total pages based on the total items and limit number
   */
  @Prop() totalPagesCount?: number;
  /**
   * The current page number
   */
  @Prop() pageNumber: number = 1;
  /**
   * The number of items per page
   */
  @Prop() limitNumber: number = 10;
  /**
   * The number of siblings to show in +2 increments before ellipses. eg: `1 = 5, 2 = 7, 3 = 9`
   */
  @Prop() siblings = 1;
  /**
   * The size of the pagination component
   */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';
  /**
   * This event is emmitted with the selected page number when the page changes
   */
  @Event() amalitechPageChange: EventEmitter<number>;

  @State() page = this.pageNumber;
  @State() total = this.totalItems;
  @State() limit = this.limitNumber;
  @State() totalPages = 10;

  componentWillLoad() {
    this.total = this.totalItems;
    this.page = this.pageNumber;
    this.limit = this.limitNumber;
    if (this.totalPagesCount && this.totalPagesCount > 0) {
      this.totalPages = this.totalPagesCount;
    } else {
      this.totalPages = Math.ceil(this.total / this.limit);
    }
  }

  private handlePageChange(value: number | string) {
    switch (value) {
      case '... ':
        this.page = 1;
        this.amalitechPageChange.emit(this.page);
        break;
      case 'prev':
        if (this.page > 1) {
          this.page = this.page - 1;
          this.amalitechPageChange.emit(this.page);
        }
        break;
      case 'next':
        if (this.page < this.totalPages) {
          this.page = this.page + 1;
          this.amalitechPageChange.emit(this.page);
        }
        break;
      case ' ...':
        this.page = this.totalPages;
        this.amalitechPageChange.emit(this.page);
        break;
      default:
        if (typeof value === 'number') {
          this.page = value;
          this.amalitechPageChange.emit(this.page);
        }
        break;
    }
  }

  private activeElement: EventTarget | null;

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      (this.activeElement as HTMLElement).click();
    }
  };

  render() {
    const array = getPaginationRange(this.totalPages, this.page, this.siblings);

    return (
      <ul
        class={{
          [`size-${this.size}`]: true,
        }}
        role="list"
      >
        <li
          tabIndex={0}
          onFocus={e => {
            this.activeElement = e.target;
            this.el.addEventListener('keydown', this.handleKeyDown);
          }}
          onBlur={() => {
            this.activeElement = null;
            this.el.removeEventListener('keydown', this.handleKeyDown);
          }}
          onClick={() => this.handlePageChange('prev')}
          aria-label="Previous"
        >
          <span>{PaginationIcons.prevIcon()}</span>
        </li>
        {array.map(item => (
          <li
            key={item}
            class={`${item === this.page ? `active` : ``}`}
            tabindex={0}
            onClick={() => this.handlePageChange(item)}
            onFocus={e => {
              this.activeElement = e.target;
              this.el.addEventListener('keydown', this.handleKeyDown);
            }}
            onBlur={() => {
              this.activeElement = null;
              this.el.removeEventListener('keydown', this.handleKeyDown);
            }}
            role="link"
            aria-label={`Page ${item}`}
            aria-current={item === this.page ? 'page' : null}
          >
            <span>{item}</span>
          </li>
        ))}
        <li
          tabIndex={0}
          onFocus={e => {
            this.activeElement = e.target;
            this.el.addEventListener('keydown', this.handleKeyDown);
          }}
          onBlur={() => {
            this.activeElement = null;
            this.el.removeEventListener('keydown', this.handleKeyDown);
          }}
          onClick={() => this.handlePageChange('next')}
          aria-label="Next"
        >
          <span>{PaginationIcons.nextIcon()}</span>
        </li>
      </ul>
    );
  }
}
