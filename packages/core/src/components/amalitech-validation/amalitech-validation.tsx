import { Component, Host, Prop, h, Element, State, EventEmitter, Event } from '@stencil/core';
import { ValidationIcons } from '../../utils/svg-icons';

/**
 * Amalitech Form Validation Feedback Component
 *
 * @slot message - The message to display
 * @slot detail - The details associated with the message
 */
@Component({
  tag: 'amalitech-validation',
  styleUrl: 'amalitech-validation.scss',
  shadow: true,
})
export class AmalitechValidation {
  @Element() private el: HTMLAmalitechValidationElement;
  /**
   * The variant of validation feedback to show
   */
  @Prop({ reflect: true }) variant: 'success' | 'error' | 'warning' = 'error';
  /**
   * Whether to automatically close the feedback component. Default duration is 5s
   */
  @Prop({ reflect: true }) autoClose: boolean = false;
  /**
   * The type of close button to show
   */
  @Prop({ reflect: true }) closeButtonType: 'arms' | 'x' | 'x-rounded' | 'square' | 'none' = 'arms';
  /**
   * The style of feedback component when opening and closing
   */
  @Prop() transition: 'toast' | 'opacity' | 'none' = 'none';
  /**
   * The number of seconds before closing the feedback component
   */
  @Prop() closeSecs: string | undefined;
  @State() timerIds: NodeJS.Timeout[] = [];
  /**
   * This event is emmitted when the close button is clicked
   */
  @Event() amalitechClose: EventEmitter<void>;
  @State() display: 'open' | 'closed' | undefined;
  @State() secondsToClose = 5;

  componentWillLoad() {
    if (Boolean(this.closeSecs)) {
      this.secondsToClose = Number(this.closeSecs);
    }

    if (Boolean(this.autoClose) || Boolean(this.closeSecs)) {
      this.timerIds.push(
        setTimeout(() => {
          this.close();
        }, this.secondsToClose * 1000),
      );
    }

    if (this.transition !== 'none') {
      this.display = 'closed';

      this.timerIds.push(
        setTimeout(() => {
          this.display = 'open';
        }, 300),
      );
    }
  }

  private close() {
    this.amalitechClose.emit();

    if (Boolean(this.display)) {
      this.display = 'closed';
      this.timerIds.push(
        setTimeout(() => {
          this.el.remove();
        }, 300),
      );
    } else {
      this.el.remove();
    }
  }

  disconnectedCallback() {
    if (this.timerIds.length > 0) {
      this.timerIds.forEach(timerId => {
        clearTimeout(timerId);
      });
    }
  }

  render() {
    /**
     * Icon types
     */
    let icon: any;
    switch (this.closeButtonType) {
      case 'arms':
        icon = ValidationIcons.armsCloseIcon();
        break;
      case 'x':
        icon = ValidationIcons.xCloseIcon();
        break;
      case 'x-rounded':
        icon = ValidationIcons.xRoundedIcon();
        break;
      case 'square':
        icon = ValidationIcons.xCloseIcon();
        break;
      case 'none':
        icon = null;
        break;
      default:
        icon = ValidationIcons.armsCloseIcon();
        break;
    }

    return (
      <Host role="alert" aria-live="assertive" aria-atomic="true">
        <main
          class={{
            [this.variant]: true,
            [`feedback-${this.transition}`]: true,
            [`display-${this.display}`]: Boolean(this.display),
          }}
        >
          <button title="Close" type="button" tabindex={icon ? 0 : -1} onClick={this.close.bind(this)}>
            {icon}
          </button>
          <div class="messages">
            <slot name="message"></slot>
            <slot name="detail"></slot>
          </div>
        </main>
      </Host>
    );
  }
}
