import { Component, ComponentInterface, Element, h, Host, Listen, Prop, State } from '@stencil/core';
import { AlertTypes } from '../../../global/types';

const getNotificationIndex = (() => {
  let counter = 1;
  return function () {
    return `${counter++}`;
  };
})();

@Component({
  tag: 'amalitech-alert',
  styleUrl: 'amalitech-alert.scss',
  shadow: true,
})
export class AmalitechAlert implements ComponentInterface {
  @Element() elm!: HTMLAmalitechAlertElement;

  /**
   * 
   */
  @Prop({ reflect: true }) name: string = 'global';

  /**
   * position of the alert
   */
  @Prop() position: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' = 'bottom-right';

  
  @State() alerts: any = [];

  @Listen('alert:alert-notification', { target: 'window' })
  listenNotification(evt: any) {
    if ((evt.detail.target === this.name || this.name === 'global') && !evt.detail.procced) {
      evt.preventDefault();
      evt.stopPropagation();
      evt.detail.procced = true;
      const alert: AlertTypes = {
        id: getNotificationIndex(),
        type: 'notification',
        title: evt.detail.title,
        subtitle: evt.detail.subtitle,
        message: evt.detail.message,
        messageType: evt.detail.messageType,
        state: evt.detail.state,
        hide: false,
      };
      this.alerts = this.alerts.concat([alert]).filter((n: any) => !n.hide);
      setTimeout(() => {
        alert.hide = true;
        this.alerts = [...this.alerts];
      }, 5000);
    }
  }

  private renderAlerts(alert: AlertTypes) {
    if (alert.type !== null) {
      switch (alert.type) {
        case 'notification':
          return (
            <amalitech-alert-content id={`${alert.id}`} state={alert.state}>
              <div innerHTML={alert.title} slot="title" />
              <div innerHTML={alert.subtitle} slot="subtitle" />
            </amalitech-alert-content>
          );
        default:
          return null;
      }
    }
  }

  render() {
    return (
      <Host>
        <div class={{ 'amalitech-alert': true, [`position-${this.position}`]: true }}>
          {this.alerts.map((alert: AlertTypes) => (
            <div class={{ alert: true, hidden: alert.hide }}>{this.renderAlerts(alert)}</div>
          ))}
        </div>
      </Host>
    );
  }
}
