import { Component, ComponentInterface, Element, Event, EventEmitter, h, Host, Prop, State } from '@stencil/core';
import { AlertIcons } from 'packages/core/src/utils/svg-icons';

@Component({
  tag: 'amalitech-alert-content',
  styleUrl: 'amalitech-alert-content.scss',
  shadow: true,
})
export class AmalitechAlertContent implements ComponentInterface {
  @Element() elm!: HTMLAmalitechAlertContentElement;

  /**
   * type of alert to be shown
   */
  @Prop() state: 'success' | 'error' | 'info' | 'warning' = 'info';

  /**
   * enables the high contrast color scheme
   */
  @Prop() highContrast: boolean = false;

  /**
   * renders a close button to close the alert
   */
  @Prop() dismissible: boolean = false;

  /**
   *
   */
  @Prop() actionable: boolean = true;

  /**
   *
   */
  @Prop() actionName: string = 'dismiss';

  /**
   *
   */
  @Prop() actionLabel: string = 'Dismiss';

  /**
   * dismiss alert event
   */
  @Event({ eventName: 'alert:alert-content-dismiss' }) amalitechAlertDismiss: EventEmitter;

  @State() hidden: boolean = false;

  render() {
    return (
      <Host hidden={this.hidden}>
        <div class={{ 'alert-content': true, 'high-contrast': this.highContrast, [`state-${this.state}`]: true }} role="alert">
          <div class="state-icon">{this.renderStateIcon()}</div>
          <div class="content">
            <div class="title">
              <slot name="title" />
              <slot />
            </div>
            <div class="subtitle">
              <slot name="subtitle" />
            </div>
          </div>
          {this.renderAction()}
          {this.renderCloseButton()}
        </div>
      </Host>
    );
  }

  private renderAction() {
    if (this.actionable)
      return (
        <div class="action">
          <slot name="action" />
        </div>
      );
  }

  private renderCloseButton() {
    if (this.dismissible) {
      return (
        <div class="close-button-container">
          <button
            class="close-button color-secondary"
            aria-label="Close alert"
            onClick={(evt: any) => {
              this.hidden = true;
              this.amalitechAlertDismiss.emit(evt);
            }}
          >
            <p class="icon">×</p>
          </button>
        </div>
      );
    }
  }

  private renderStateIcon() {
    switch (this.state) {
      case 'success':
        return AlertIcons.successIcon();
      case 'error':
        return AlertIcons.errorIcon();
      case 'info':
        return AlertIcons.infoIcon();
      case 'warning':
        return AlertIcons.warningIcon();
      default:
        return null;
    }
  }
}
