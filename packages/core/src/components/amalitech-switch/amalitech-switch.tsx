import { Component, Prop, h, Event, EventEmitter, Host, Element } from '@stencil/core';

/**
 * The switch component is a wrapper around the native checkbox element.
 */
@Component({
  tag: 'amalitech-switch',
  styleUrl: 'amalitech-switch.scss',
  shadow: true,
})
export class AmalitechSwitch {
  @Element() el: HTMLAmalitechSwitchElement;
  /**
   * The whether the component is checked or not
   */
  @Prop({ reflect: true }) checked: boolean = false;
  /**
   * The whether the component is disabled or not
   */
  @Prop({ reflect: true }) disabled: boolean = false;
  /**
   * The name attribute of the underlying checkbox element
   */
  @Prop({ reflect: true }) name: string | undefined = undefined;
  /**
   * The value attribute of the underlying checkbox element
   */
  @Prop({ reflect: true }) value: string | undefined = undefined;
  /**
   * The id of the underlying checkbox element
   */
  @Prop({ reflect: true }) switchId: string | undefined = undefined;
  /**
   * The size of the switch component
   */
  @Prop({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';
  /**
   * The event that is emitted when the component is clicked
   */
  @Event() amalitechSwitchChange: EventEmitter<Record<string, string | boolean>>;

  private inputElement: HTMLInputElement | undefined = undefined;

  private handleChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.amalitechSwitchChange.emit({
      name: target.name,
      value: target.value,
      checked: target.checked,
    });
  };

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      this.inputElement?.click();
    }
  };

  render() {
    return (
      <Host role="switch" aria-checked={this.checked} aria-disabled={this.disabled} aria-label={this.name}>
        <input
          tabindex="0"
          type="checkbox"
          class={{
            [`switch`]: true,
            [`size-${this.size}`]: true,
          }}
          checked={this.checked}
          disabled={this.disabled}
          name={this.name}
          value={this.value}
          id={this.switchId}
          onChange={this.handleChange}
          onFocus={() => this.el.addEventListener('keydown', this.handleKeyDown)}
          onBlur={() => this.el.removeEventListener('keydown', this.handleKeyDown)}
          ref={el => (this.inputElement = el)}
        />
      </Host>
    );
  }
}
