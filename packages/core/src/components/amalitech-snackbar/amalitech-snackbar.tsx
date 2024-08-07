import { Component, Host, h, Prop, State, Element, Event, EventEmitter } from '@stencil/core';
import { SnackbarIcons } from '../../utils/svg-icons';

@Component({
  tag: 'amalitech-snackbar',
  styleUrl: 'amalitech-snackbar.scss',
  shadow: true,
})
export class AmalitechSnackbar {
  /**
   * Auto Close
   * Enables the auto close functionality
   */
  @Prop() autoClose: boolean = false;

  /**
   * Sets the duration before the snackbar closes
   */
  @Prop() closeSecs: number = 10;

  /**
   * Closeable
   * Shows a close button if true
   */
  @Prop() closeable: boolean = false;

  /**
   * Rounded
   * Sets the border radius of the snackbar to round or square
   */
  @Prop() rounded: boolean = false;

  /**
   * Snackbar text
   * Sets the Snackbar text
   */
  @Prop({ reflect: true }) snackbarText: string = '';

  /**
   * Call To Action Text
   * Sets the call-to-action text
   */
  @Prop({ reflect: true }) callToActionText: string = '';

  /**
   * href attribute
   * Sets the url of the snackbar
   */
  @Prop() href: string = '';

  /**
   * target attribute
   * specifies how to open the url of the snackbar
   */
  @Prop() target: string = '_blank';

  @State() countDownTimerId: number | undefined = undefined;

  @Element() el: HTMLAmalitechSnackbarElement;

  private close = () => {
    this.closed.emit();
    this.el.remove();
  };

  /**
   * This event is emitted when the close button is clicked
   */
  @Event() closed: EventEmitter;

  private renderCloseText = () => {
    if (this.closeable) {
      return (
        <span class="snackbar__close-text" onClick={this.close}>
          {SnackbarIcons.closeIcon()}
        </span>
      );
    }
    return null;
  };

  componentWillLoad() {
    if (this.el.hasAttribute('auto-close')) {
      this.countDownTimerId = window.setTimeout(() => {
        this.close();
      }, this.closeSecs * 1000);
    }
  }

  disconnectedCallback() {
    if (this.autoClose) {
      window.clearInterval(this.countDownTimerId);
    }
  }

  render() {
    return (
      <Host
        class={{
          [`rounded`]: this.rounded,
        }}
      >
        <div
          class={{
            snackbar__content: true,
            snackbar__dismissible: this.closeable,
          }}
        >
          <div class={'section'}>
            <div class={'icon'}>{SnackbarIcons.errorIcon()}</div>
            <p>{this.snackbarText}</p>
            <p class={'cta'}>
              {this.callToActionText !== undefined && this.href !== undefined ? (
                <a href={this.href} target={this.target}>
                  {this.callToActionText}
                </a>
              ) : (
                this.callToActionText
              )}
            </p>
          </div>
        </div>
        {this.renderCloseText()}
      </Host>
    );
  }
}
