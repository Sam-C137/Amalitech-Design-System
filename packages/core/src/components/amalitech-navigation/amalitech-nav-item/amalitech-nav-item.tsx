import { Component, Host, Prop, h, Event, EventEmitter, Element } from '@stencil/core';

@Component({
  tag: 'amalitech-nav-item',
  styleUrl: 'amalitech-nav-item.scss',
  shadow: true,
})
export class AmalitechNavItem {
  @Element() el: HTMLAmalitechNavItemElement;
  /**
   * Whether the nav item is active or not
   */
  @Prop({ mutable: true, reflect: true }) active: boolean = false;
  /**
   * Whether the nav item is disabled
   */
  @Prop({ reflect: true }) disabled: boolean = false;
  /**
   * Event emitted when the nav item is clicked
   */
  @Event({ composed: false, bubbles: true }) private switch: EventEmitter<void>;

  private async handleSwitch() {
    if (!this.active) {
      this.active = true;
      this.switch.emit();
    }
  }

  private callHandleSwitch = () => {
    !this.disabled && this.handleSwitch();
  };

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      this.el?.click();
    }
  };

  render() {
    return (
      <Host
        onClick={this.callHandleSwitch}
        class={{
          [`active`]: this.active,
        }}
        tabindex={this.disabled ? -1 : 0}
        onFocus={() => this.el.addEventListener('keydown', this.handleKeyDown)}
        onBlur={() => this.el.removeEventListener('keydown', this.handleKeyDown)}
        role="listitem"
        aria-disabled={String(!!this.disabled)}
        aria-current={this.active ? 'page' : undefined}
      >
        <slot></slot>
      </Host>
    );
  }
}
