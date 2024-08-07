import { Component, h, Prop, State, Host, Element, EventEmitter, Event, Method } from '@stencil/core';
import { TimePickerIcons } from '../../utils/svg-icons';

@Component({
  tag: 'amalitech-time-picker',
  styleUrl: 'amalitech-time-picker.scss',
  shadow: true,
})
export class AmalitechTimePicker {
  @Element() el: HTMLAmalitechTimePickerElement;
  /**
   * If true, time picker will be in 12 hour format
   */
  @Prop() meridian: boolean = false;
  /**
   * If true, time picker will show seconds
   */
  @Prop() seconds: boolean = false;
  /**
   * The label of the time picker
   */
  @Prop() label: string = 'Pick a Time';
  /**
   * The size of the time picker
   */
  @Prop() size: 'small' | 'medium' | 'large' = 'medium';
  /**
   * If true, the time picker will show a required state
   */
  @Prop() required: boolean;
  /**
   * The current value of the time picker in the format `00:00`
   */
  @Prop() value: string | undefined = undefined;
  /**
   * The format of the time picker event detail
   */
  @Prop() outputFormat: 'string' | 'date' = 'string';
  /**
   * The maximum time that can be selected in the format `00:00`
   */
  @Prop() max: string | undefined = undefined;
  /**
   * The minimum time that can be selected in the format `00:00`
   */
  @Prop() min: string | undefined = undefined;
  @State() hour: string = '00';
  @State() minute: string = '00';
  @State() second: string | undefined = this.seconds ? '00' : undefined;
  @State() meridianValue: string = this.meridian ? 'AM' : '';
  /**
   * This event emmits the value of the selected time in the format {time: '00:00 AM', hour: '00', minute: '00', meridian: 'AM'}
   */
  @Event() amalitechTimeChange: EventEmitter<Partial<Record<'time' | 'hour' | 'minute' | 'meridian' | 'second', string>> | Date>;
  /**
   * This event is emitted when the time picker value is cleared
   */
  @Event() amalitechTimeClear: EventEmitter<void>;

  @State() isDropdownOpen: boolean = false;
  @State() showCloseIcon: boolean = false;

  componentWillLoad() {
    if (Boolean(this.value)) {
      const splitTime = this.value!.trim().split(/(am|pm)/i);
      if (splitTime.length > 1) {
        this.meridianValue = splitTime[1].trim().toUpperCase();
        const [hour, minute, second] = splitTime[0].trim().split(':');
        this.setTime(Number(hour), Number(minute), Number(second));
      } else {
        const [hour, minute, second] = this.value!.trim().split(':');
        this.setTime(Number(hour), Number(minute), Number(second));
      }
    }
    if (Boolean(this.min)) {
      const splitTime = this.min!.trim().split(/(am|pm)/i);
      if (splitTime.length > 1) {
        this.meridianValue = splitTime[1].trim().toUpperCase();
        const [hour, minute] = splitTime[0].trim().split(':');
        this.hour = hour.padStart(2, '0');
        this.minute = minute.padStart(2, '0');
      } else {
        const [hour, minute] = this.min!.trim().split(':');
        this.hour = hour.padStart(2, '0');
        this.minute = minute.padStart(2, '0');
      }
    }
  }

  componentDidLoad() {
    document.addEventListener('click', this.handleClickOutside);
  }

  private handleClickOutside = (event: MouseEvent) => {
    if (!this.el.contains(event.target as Node)) {
      if (this.isDropdownOpen) {
        this.isDropdownOpen = false;
      }
    }
  };

  disconnectedCallback() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  /**
   * Change handlers
   * @param event
   */
  private handleHourChange(event: Event) {
    this.hour = (event.target as HTMLDivElement).innerText;
    if (this.outputFormat === 'string') {
      this.amalitechTimeChange.emit({
        time: (this.hour + ':' + this.minute + ' ' + this.meridianValue).trim(),
        hour: this.hour,
        minute: this.minute,
        meridian: this.meridianValue,
      });
    } else {
      this.amalitechTimeChange.emit(new Date(`${new Date().toDateString()} ${this.hour}:${this.minute}:00 ${this.meridianValue}`));
    }
  }

  private handleMinuteChange(event: Event) {
    this.minute = (event.target as HTMLDivElement).innerText;
    if (this.outputFormat === 'string') {
      this.amalitechTimeChange.emit({
        time: (this.hour + ':' + this.minute + ' ' + this.meridianValue).trim(),
        hour: this.hour,
        minute: this.minute,
        meridian: this.meridianValue,
      });
    } else {
      this.amalitechTimeChange.emit(new Date(`${new Date().toDateString()} ${this.hour}:${this.minute}:00 ${this.meridianValue}`));
    }
  }

  private handleSecondChange(event: Event) {
    this.second = (event.target as HTMLDivElement).innerText;
    if (this.outputFormat === 'string') {
      this.amalitechTimeChange.emit({
        time: (this.hour + ':' + this.minute + ':' + this.second + ' ' + this.meridianValue).trim(),
        hour: this.hour,
        minute: this.minute,
        second: this.second,
        meridian: this.meridianValue,
      });
    } else {
      this.amalitechTimeChange.emit(new Date(`${new Date().toDateString()} ${this.hour}:${this.minute}:${this.second} ${this.meridianValue}`));
    }
  }

  private handleMeridianChange(event: Event) {
    this.meridianValue = (event.target as HTMLDivElement).innerText;
    if (this.outputFormat === 'string') {
      this.amalitechTimeChange.emit({ time: this.hour + ':' + this.minute + ' ' + this.meridianValue, hour: this.hour, minute: this.minute, meridian: this.meridianValue });
    } else {
      this.amalitechTimeChange.emit(new Date(`${new Date().toDateString()} ${this.hour}:${this.minute}:00 ${this.meridianValue}`));
    }
  }

  /**
   * Sets the current time as the value of the time picker,
   * checks if the current time is within the min and max time range
   * @returns void
   */
  private setCurrentTime() {
    const currentDate = new Date();
    const hour = currentDate.getHours();
    const minute = currentDate.getMinutes();
    const second = this.seconds ? currentDate.getSeconds() : undefined;

    if (Boolean(this.min) || Boolean(this.max)) {
      let [minHour, minMinute] = Boolean(this.min) ? this.convertTo24Hour(this.min!).split(':').map(Number) : [0, 0];
      let [maxHour, maxMinute] = Boolean(this.max) ? this.convertTo24Hour(this.max!).split(':').map(Number) : [23, 59];

      if ((hour > minHour || (hour === minHour && minute >= minMinute)) && (hour < maxHour || (hour === maxHour && minute <= maxMinute))) {
        this.setTime(hour, minute, second);
      }
    } else {
      this.setTime(hour, minute, second);
    }
  }

  /**
   * Sets the time picker value to the specified time
   * handles 24 and 12 hour format
   * @param hour
   * @param minute
   * @param second
   */
  private setTime(hour: number, minute: number, second?: number) {
    this.hour = hour.toString().padStart(2, '0');
    this.minute = minute.toString().padStart(2, '0');
    this.second = Boolean(second) ? second!.toString().padStart(2, '0') : undefined;

    if (this.meridian) {
      this.meridianValue = hour < 12 ? 'AM' : 'PM';
      this.hour = (hour % 12 || 12).toString().padStart(2, '0');
    } else {
      this.meridianValue = '';
    }

    if (this.outputFormat === 'string') {
      this.amalitechTimeChange.emit({
        time: this.hour + ':' + this.minute + (this.seconds ? ':' + this.second : '') + ' ' + this.meridianValue,
        hour: this.hour,
        minute: this.minute,
        second: this.second || '00',
        meridian: this.meridianValue,
      });
    } else {
      this.amalitechTimeChange.emit(new Date(`${new Date().toDateString()} ${this.hour}:${this.minute}:${this.second || 0o0} ${this.meridianValue}`));
    }

    this.isDropdownOpen = false;
  }

  /**
   * Converts time from 12 hour format to 24 hour format
   * @param time - time in 12 hour format
   * @returns - time in 24 hour format
   */
  private convertTo24Hour(time: string) {
    const [hourMinute, meridian] = time.split(/(am|pm)/i);
    let [hour, minute] = hourMinute.trim().split(':').map(Number);

    if (meridian.toLowerCase() === 'pm' && hour < 12) {
      hour += 12;
    } else if (meridian.toLowerCase() === 'am' && hour === 12) {
      hour = 0;
    }

    return `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
  }

  /**
   * Disabled checkers
   * @function isHourDisabled
   * @function isMinuteDisabled
   */
  private isHourDisabled(hour: number) {
    const isAfterMax = this.max && hour > parseInt(this.max.split(':')[0]);
    const isBeforeMin = this.min && hour < parseInt(this.min.split(':')[0]);
    return Boolean(isAfterMax || isBeforeMin);
  }

  private isMinuteDisabled(minute: number) {
    const isAfterMax = this.max && this.hour === this.max.split(':')[0] && minute > parseInt(this.max.split(':')[1]);
    const isBeforeMin = this.min && this.hour === this.min.split(':')[0] && minute < parseInt(this.min.split(':')[1]);
    return Boolean(isAfterMax || isBeforeMin);
  }

  get iconSizes() {
    const sizes = {
      small: '10px',
      medium: '16px',
      large: '28px',
    };
    return sizes[this.size];
  }

  private refs = new Map<string, HTMLElement | undefined>();

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      switch ((e.target as HTMLInputElement).localName) {
        case 'amalitech-time-picker':
          this.refs.get('panel')?.click();
          break;
        default:
          break;
      }
    }
  };

  /**
   * Opens the time picker dropdown
   */
  @Method()
  async open() {
    requestAnimationFrame(() => {
      this.isDropdownOpen = true;
    });
  }

  /**
   * Closes the time picker dropdown
   */
  @Method()
  async close() {
    this.isDropdownOpen = false;
  }

  render() {
    const hours = Array.from({ length: this.meridian ? 13 : 24 }, (_, i) => i);
    const minutes = Array.from({ length: 60 }, (_, i) => i);
    let seconds;
    if (this.seconds) {
      seconds = Array.from({ length: 60 }, (_, i) => i);
    }

    const clockIcon = TimePickerIcons.clockIcon(this.iconSizes);

    const closeIcon = TimePickerIcons.closeIcon(this.iconSizes, e => {
      /**
       * reset all state variables
       */
      this.hour = '00';
      this.minute = '00';
      this.meridianValue = this.meridian ? 'AM' : '';
      this.amalitechTimeClear.emit();
      e.stopPropagation();
    });

    return (
      <Host
        class={{
          [`size-${this.size}`]: true,
          seconds: this.seconds,
          meridian: this.meridian,
        }}
        tabindex={0}
        onFocus={() => this.el?.addEventListener('keydown', this.handleKeyDown, true)}
        onBlur={() => this.el?.removeEventListener('keydown', this.handleKeyDown, true)}
        role="spinbutton"
        aria-label={this.label}
        aria-haspopup="dialog"
        aria-owns="time-picker"
        aria-valuetext={`${this.hour}:${this.minute} ${this.meridianValue}`}
        aria-valuemin={Boolean(this.min) ? this.min?.replace(':', '') : '0000'}
        aria-valuemax={Boolean(this.max) ? this.max?.replace(':', '') : '2359'}
        aria-valuenow={`${this.hour}${this.minute}`}
        aria-required={String(!!this.required)}
      >
        {this.required && (
          <div class="required">
            <p>Required</p>
          </div>
        )}
        <div
          class={{
            [`size-${this.size}`]: true,
            ['span']: true,
          }}
          onClick={() => (this.isDropdownOpen = !this.isDropdownOpen)}
          onMouseOver={() => (this.showCloseIcon = true)}
          onMouseLeave={() => (this.showCloseIcon = false)}
          ref={el => this.refs.set('panel', el)}
          aria-controls="time-picker"
          aria-expanded={String(!!this.isDropdownOpen)}
        >
          {this.minute === '00' && this.hour === '00' ? (
            <div>
              <p>{this.label}</p> {clockIcon}
            </div>
          ) : (
            <div>
              {this.hour} : {this.minute} {this.seconds ? `: ${this.second}` : null} {this.meridianValue} {this.showCloseIcon ? closeIcon : clockIcon}
            </div>
          )}
        </div>
        <main
          class={{
            [`open`]: this.isDropdownOpen,
          }}
          role="dialog"
        >
          <section>
            <summary>
              <div>
                {hours
                  .filter(hour => !(this.meridian && hour === 0))
                  .map(hour => (
                    <button
                      class={{
                        [`hour`]: true,
                        [`active`]: this.hour === hour.toString().padStart(2, '0'),
                        [`disabled`]: this.isHourDisabled(hour),
                      }}
                      onClick={event => {
                        if (this.isHourDisabled(hour)) {
                          event.preventDefault();
                          event.stopPropagation();
                        } else {
                          this.handleHourChange(event);
                        }
                      }}
                      tabindex={this.isHourDisabled(hour) || !this.isDropdownOpen ? -1 : 0}
                      type="button"
                    >
                      {hour.toString().padStart(2, '0')}
                    </button>
                  ))}
              </div>
            </summary>
            <summary>
              <div>
                {minutes.map(minute => (
                  <button
                    class={{
                      [`minute`]: true,
                      [`active`]: this.minute === minute.toString().padStart(2, '0'),
                      [`disabled`]: this.isMinuteDisabled(minute),
                    }}
                    onClick={event => {
                      if (this.isMinuteDisabled(minute)) {
                        event.preventDefault();
                        event.stopPropagation();
                      } else {
                        this.handleMinuteChange(event);
                      }
                    }}
                    tabindex={this.isMinuteDisabled(minute) || !this.isDropdownOpen ? -1 : 0}
                    type="button"
                  >
                    {minute.toString().padStart(2, '0')}
                  </button>
                ))}
              </div>
            </summary>
            {this.seconds && (
              <summary>
                <div>
                  {seconds?.map(second => (
                    <button
                      class={{
                        [`second`]: true,
                        [`active`]: this.second === second.toString().padStart(2, '0'),
                      }}
                      onClick={event => {
                        this.handleSecondChange(event);
                      }}
                      tabIndex={this.isDropdownOpen ? 0 : -1}
                      type="button"
                    >
                      {second.toString().padStart(2, '0')}
                    </button>
                  ))}
                </div>
              </summary>
            )}
            {this.meridian && (
              <summary>
                <div>
                  <button
                    class={{
                      [`meridian`]: true,
                      [`active`]: this.meridianValue === 'AM',
                    }}
                    onClick={event => this.handleMeridianChange(event)}
                    tabIndex={this.isDropdownOpen ? 0 : -1}
                    type="button"
                  >
                    AM
                  </button>
                  <button
                    class={{
                      [`meridian`]: true,
                      [`active`]: this.meridianValue === 'PM',
                    }}
                    onClick={event => this.handleMeridianChange(event)}
                    tabIndex={this.isDropdownOpen ? 0 : -1}
                    type="button"
                  >
                    PM
                  </button>
                </div>
              </summary>
            )}
          </section>
          <footer
            class={{
              [`size-${this.size}`]: true,
            }}
          >
            <button
              type="button"
              onClick={() => {
                this.setCurrentTime();
              }}
              tabindex={this.isDropdownOpen ? 0 : -1}
            >
              Now
            </button>
            <button
              type="button"
              onClick={() => {
                this.isDropdownOpen = false;
              }}
              tabindex={this.isDropdownOpen ? 0 : -1}
            >
              OK
            </button>
          </footer>
        </main>
      </Host>
    );
  }
}
