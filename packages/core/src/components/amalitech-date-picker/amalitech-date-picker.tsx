import {Component, Host, Prop, State, h, Element, Event, EventEmitter, Method, Watch} from '@stencil/core';
import { CalendarIcons } from '../../utils/svg-icons';
const { calendarIcon, closeIcon, downArrow, nextArrow, prevArrow } = CalendarIcons;

@Component({
  tag: 'amalitech-date-picker',
  styleUrl: 'amalitech-date-picker.scss',
  shadow: true,
})
export class AmalitechDatePicker {
  @Element() el: HTMLAmalitechDatePickerElement;
  /**
   * The first day of the week, 0 for Sunday and 1 for Monday
   */
  @Prop() firstDayOfWeek: '0' | '1' = '1';
  /**
   * The label of the date picker
   */
  @Prop() label: string = 'Pick a Date';
  /**
   * The disabled state of the date picker
   */
  @Prop() disabled: boolean = false;
  /**
   * The minimum date that a user can select in the format `YYYY-MM-DD`
   */
  @Prop() min: string | undefined = undefined;
  /**
   * The maximum date that a user can select in the format `YYYY-MM-DD`
   */
  @Prop() max: string | undefined = undefined;
  /**
   * The value of the date picker in the format `YYYY-MM-DD`
   */
  @Prop() value: string | undefined = undefined;
  /**
   * The output type of the date picker, either `string` or `date`, default is `string`
   **/
  @Prop() outputType: 'string' | 'date' = 'string';
  /**
   * The output format of the date picker, either `YYYY-MM-DD` or `DD-MM-YYYY`, default is `YYYY-MM-DD`
   **/
  @Prop() outputFormat: 'YYYY-MM-DD' | 'DD-MM-YYYY' = 'YYYY-MM-DD';
  /**
   * The icon position of the date picker, either `left` or `right`, default is `right`
   */
  @Prop() iconPosition: 'left' | 'right' = 'right';
  /**
   * The date change event that is emitted when the date changes
   */
  @Event() amalitechDateChange: EventEmitter<string | Date>;
  /**
   * The date clear event is emitted when the date selection is cleared
   */
  @Event() amalitechDateClear: EventEmitter<void>;

  @State() today: Date = new Date();
  @State() selectDate: Date | undefined = undefined;
  @State() isMonthsOpen: boolean = false;
  @State() isYearsOpen: boolean = false;
  @State() isCalendarOpen: boolean = false;
  @State() showCloseIcon: boolean = false;
  @State() minDate: Date | undefined = undefined;
  @State() maxDate: Date | undefined = undefined;
  @State() weekFirstDay: number = 0;
  private days: string[] = [];
  private months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  private currentYearRef: HTMLParagraphElement | undefined;

  componentWillLoad() {
    if (this.firstDayOfWeek === '0') {
      this.days = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
      this.weekFirstDay = 0;
    } else {
      this.days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
      this.weekFirstDay = 1;
    }
    this.minDate = this.validateDate(this.min);
    this.maxDate = this.validateDate(this.max);

    if (this.value !== undefined) {
      const value = this.validateDate(this.value) as Date;
      if ((!this.minDate || value >= this.minDate) && (!this.maxDate || value <= this.maxDate)) {
        this.today = value;
        this.selectDate = value;
        this.amalitechDateChange.emit(value);
      }
    } else if (this.minDate) {
      this.today = this.minDate;
      this.amalitechDateChange.emit(this.today);
    } else if (this.maxDate && this.maxDate < this.today) {
      this.today = this.maxDate;
      this.amalitechDateChange.emit(this.today);
    }

    this.outputFormat.toUpperCase();
  }

  componentWillRender() {
    this.scrollToMiddle();
  }

  componentDidLoad() {
    document.addEventListener('click', this.handleClickOutside);
  }

  disconnectedCallback() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  private scrollToMiddle() {
    const currentYearElement = this.currentYearRef;
    if (currentYearElement) {
      const summary = currentYearElement.parentElement!;
      const container = summary.parentElement!;
      container.scrollTop = currentYearElement.offsetTop - container.offsetTop - 100;
    }
  }

  private handleClickOutside = (event: MouseEvent) => {
    if (event.detail === 0) {
      return;
    }

    const monthDropdown = this.el.shadowRoot?.querySelector('.months');
    const yearDropdown = this.el.shadowRoot?.querySelector('.years');
    const path = event.composedPath();

    if (monthDropdown && !path.includes(monthDropdown)) {
      if (this.isMonthsOpen) {
        this.isMonthsOpen = false;
      }
    }
    if (yearDropdown && !path.includes(yearDropdown)) {
      if (this.isYearsOpen) {
        this.isYearsOpen = false;
      }
    }
    if (!this.el.contains(event.target as Node)) {
      this.isCalendarOpen = false;
    }
  };

  @Watch('min')
  handleMinChange(newValue: string) {
    this.minDate = this.validateDate(newValue);
  }

  @Watch('max')
  handleMaxChange(newValue: string) {
    this.maxDate = this.validateDate(newValue);
  }

  @Watch('value')
  handleValueChange(newValue: string) {
    const value = this.validateDate(newValue) as Date;
    if ((!this.minDate || value >= this.minDate) && (!this.maxDate || value <= this.maxDate)) {
      this.today = value;
      this.selectDate = value;
    }
  }

  /**
   * This method toggles the date picker open
   */
  @Method()
  async open() {
    if (!this.disabled) {
      requestAnimationFrame(() => {
        this.isCalendarOpen = true;
      });
    }
  }

  /**
   * This method toggles the date picker close
   */
  @Method()
  async close() {
    this.isCalendarOpen = false;
  }

  // Helper function to generate dates
  private generateDate(month: number = this.today.getMonth(), year: number = this.today.getFullYear()) {
    const firstDateOfMonth = new Date(year, month, 1);
    const lastDateOfMonth = new Date(year, month + 1, 0);
    const lastDateOfPrevMonth = new Date(year, month, 0);
    const today = new Date();

    const arrayOfDate = [];

    // create prefix date
    for (let i = 0; i < (7 + firstDateOfMonth.getDay() - Number(this.weekFirstDay)) % 7; i++) {
      const prefixDate = new Date(year, month - 1, lastDateOfPrevMonth.getDate() - i);
      arrayOfDate.unshift({
        currentMonth: false,
        date: prefixDate,
        isOutsideRange: (this.minDate && prefixDate < this.minDate) || (this.maxDate && prefixDate > this.maxDate),
      });
    }

    // generate current date
    for (let i = 1; i <= lastDateOfMonth.getDate(); i++) {
      const date = new Date(year, month, i);
      arrayOfDate.push({
        currentMonth: true,
        date,
        today: date.toDateString() === today.toDateString(),
        isOutsideRange: (this.minDate && date < this.minDate) || (this.maxDate && date > this.maxDate),
      });
    }

    const remaining = 42 - arrayOfDate.length;

    // create suffix date
    for (let i = 1; i <= remaining; i++) {
      const suffixDate = new Date(year, month + 1, i);
      arrayOfDate.push({
        currentMonth: false,
        date: suffixDate,
        isOutsideRange: (this.minDate && suffixDate < this.minDate) || (this.maxDate && suffixDate > this.maxDate),
      });
    }

    return arrayOfDate;
  }

  private handlePrevMonth = () => {
    let date = new Date(this.today.getFullYear(), this.today.getMonth() - 1);
    this.today = date;
  };

  private handleNextMonth = () => {
    let date = new Date(this.today.getFullYear(), this.today.getMonth() + 1);
    this.today = date;
  };

  private handleDateClick = (date: Date) => {
    if (date.getMonth() !== this.today.getMonth()) {
      this.today = new Date(date.getFullYear(), date.getMonth(), 1);
    }
    this.selectDate = date;
    if (this.outputType === 'string') {
      this.amalitechDateChange.emit(this.formatDate(date, this.outputFormat));
    } else {
      this.amalitechDateChange.emit(date);
    }
  };

  private setToday = () => {
    this.handleDateClick(new Date());
  };

  private formatDate(date: Date, format: 'YYYY-MM-DD' | 'DD-MM-YYYY' = 'YYYY-MM-DD') {
    if (format === 'YYYY-MM-DD') {
      return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
    } else {
      return `${String(date.getDate()).padStart(2, '0')}-${String(date.getMonth() + 1).padStart(2, '0')}-${date.getFullYear()}`;
    }
  }

  private validateDate(date: string | undefined) {
    if (date !== undefined) {
      const [year, month, day] = date.split('-').map(Number);
      return new Date(year, month - 1, day);
    }
    return undefined;
  }

  private calendarId = `calendar-${calendarIds++}`;

  private refs = new Map<string, HTMLElement | undefined>();

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      this.refs.get('panel')?.click();
    }
  };

  render() {
    const today = new Date();
    const isTodayOutsideRange = (this.minDate && today < this.minDate) || (this.maxDate && today > this.maxDate);
    /**
     * Display panel
     */
    const panelSection = (
      <section
        id="panel"
        onMouseOver={() => (this.showCloseIcon = true)}
        onMouseLeave={() => (this.showCloseIcon = false)}
        class={{
          disabled: this.disabled,
        }}
        onClick={() => {
          if (!this.disabled) {
            this.isCalendarOpen = !this.isCalendarOpen;
          }
        }}
        ref={elm => {
          if (elm) this.refs.set('panel', elm);
        }}
        aria-haspopup="dialog"
        aria-expanded={String(this.isCalendarOpen)}
        aria-label={this.label}
        aria-controls={this.calendarId}
      >
        {this.selectDate ? (
          <div
            class={{
              [`icon-${this.iconPosition}`]: true,
            }}
          >
            {this.formatDate(this.selectDate, this.outputFormat)}
            {this.showCloseIcon ? (
              <span
                onClick={e => {
                  this.selectDate = undefined;
                  this.amalitechDateClear.emit();
                  e.stopPropagation();
                }}
              >
                {closeIcon()}
              </span>
            ) : (
              <span>{calendarIcon()}</span>
            )}
          </div>
        ) : (
          <div
            class={{
              [`icon-${this.iconPosition}`]: true,
            }}
          >
            <p>{this.label}</p> <span>{calendarIcon()}</span>
          </div>
        )}
      </section>
    );

    /**
     * Calendar Controls
     */
    const calendarControls = (
      <header>
        <div class="texts">
          <span class="wrapper">
            <h1
              onClick={event => {
                this.isMonthsOpen = !this.isMonthsOpen;
                event?.stopPropagation();
              }}
              aria-haspopup="dialog"
              tabindex={this.isCalendarOpen ? 0 : -1}
            >
              {this.months[this.today.getMonth()]} <span>{downArrow()}</span>
            </h1>
            <div
              class={{
                [`months`]: true,
                [`dropdown`]: true,
                [`open`]: this.isMonthsOpen,
              }}
              role="dialog"
            >
              <summary>
                {this.months.map((month, index) => {
                  const date = new Date(this.today.getFullYear(), index);
                  const minDate = this.minDate ? new Date(this.minDate.getFullYear(), this.minDate.getMonth()) : null;
                  const maxDate = this.maxDate ? new Date(this.maxDate.getFullYear(), this.maxDate.getMonth()) : null;
                  if ((!minDate || date >= minDate) && (!maxDate || date <= maxDate)) {
                    return (
                      <p
                        onClick={() => {
                          this.today = new Date(this.today.getFullYear(), index);
                          this.isMonthsOpen = false;
                        }}
                        class={{
                          [`active`]: index === this.today.getMonth(),
                        }}
                      >
                        {month}
                      </p>
                    );
                  }
                })}
              </summary>
            </div>
          </span>
          <span class="wrapper">
            <h1
              onClick={event => {
                this.isYearsOpen = !this.isYearsOpen;
                event?.stopPropagation();
              }}
              aria-haspopup="dialog"
              tabindex={this.isCalendarOpen ? 0 : -1}
            >
              {this.today.getFullYear()}
              <span>{downArrow()}</span>
            </h1>
            <div
              class={{
                [`years`]: true,
                [`dropdown`]: true,
                [`open`]: this.isYearsOpen,
              }}
            >
              <summary>
                {Array.from({ length: 200 }, (_, i) => i + this.today.getFullYear() - 100).map(year => {
                  const date = new Date(year, this.today.getMonth(), 1);
                  const minDate = this.minDate ? new Date(this.minDate.getFullYear(), this.minDate.getMonth()) : null;
                  const maxDate = this.maxDate ? new Date(this.maxDate.getFullYear(), this.maxDate.getMonth()) : null;
                  const isCurrentYear = year === this.today.getFullYear();
                  if ((!minDate || date >= minDate) && (!maxDate || date <= maxDate)) {
                    return (
                      <p
                        onClick={() => {
                          this.today = new Date(year, this.today.getMonth());
                          this.isYearsOpen = false;
                        }}
                        class={{
                          [`active`]: isCurrentYear,
                        }}
                        ref={
                          isCurrentYear
                            ? elm => {
                                if (elm) this.currentYearRef = elm;
                              }
                            : undefined
                        }
                      >
                        {year}
                      </p>
                    );
                  }
                })}
              </summary>
            </div>
          </span>
        </div>
        <div class="buttons">
          <button
            type="button"
            title="previous"
            onClick={this.handlePrevMonth}
            disabled={this.minDate && this.today.getMonth() === this.minDate.getMonth() && this.today.getFullYear() === this.minDate.getFullYear()}
            tabindex={this.isCalendarOpen ? 0 : -1}
          >
            {prevArrow()}
          </button>
          <button
            type="button"
            title="next"
            onClick={this.handleNextMonth}
            disabled={this.maxDate && this.today.getMonth() === this.maxDate.getMonth() && this.today.getFullYear() === this.maxDate.getFullYear()}
            tabindex={this.isCalendarOpen ? 0 : -1}
          >
            {nextArrow()}
          </button>
        </div>
      </header>
    );

    /**
     * Return Statement
     */
    return (
      <Host
        disabled={this.disabled}
        tabindex={0}
        onFocus={() => this.el?.addEventListener('keydown', this.handleKeyDown)}
        onBlur={() => this.el?.removeEventListener('keydown', this.handleKeyDown)}
      >
        <header>{panelSection}</header>
        <section
          id={this.calendarId}
          class={{
            [`open`]: this.isCalendarOpen,
            [`calendar`]: true,
          }}
          role="dialog"
        >
          {calendarControls}
          <header>
            {this.days.map(day => (
              <span>{day}</span>
            ))}
          </header>
          <main>
            {this.generateDate(this.today.getMonth(), this.today.getFullYear()).map(({ date, currentMonth, today, isOutsideRange }) => (
              <button
                onClick={() => this.handleDateClick(date)}
                class={{
                  date: true,
                  [`not-current-month`]: !currentMonth,
                  [`today`]: Boolean(today),
                  [`selected`]: date.toDateString() === this.selectDate?.toDateString(),
                }}
                disabled={isOutsideRange}
                type="button"
                tabIndex={this.isCalendarOpen ? 0 : -1}
              >
                {date.getDate()}
              </button>
            ))}
          </main>
          <footer>
            <button
              onClick={() => {
                this.isCalendarOpen = false;
                this.setToday();
              }}
              disabled={isTodayOutsideRange}
              tabIndex={this.isCalendarOpen ? 0 : -1}
              type="button"
            >
              Today
            </button>
            <div>
              <button
                onClick={() => {
                  this.selectDate = undefined;
                  this.isCalendarOpen = false;
                  this.amalitechDateClear.emit();
                }}
                type="button"
                tabIndex={this.isCalendarOpen ? 0 : -1}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (this.selectDate) {
                    this.isCalendarOpen = false;
                  }
                }}
                type="submit"
                tabIndex={this.isCalendarOpen ? 0 : -1}
              >
                Ok
              </button>
            </div>
          </footer>
        </section>
      </Host>
    );
  }
}

let calendarIds = 0;
