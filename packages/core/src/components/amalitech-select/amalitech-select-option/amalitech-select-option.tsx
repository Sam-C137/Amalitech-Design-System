import { Component, h, Prop, Host, Event, EventEmitter, Element, Method } from '@stencil/core';

/**
 * The select option component is designed to be nested within a select component.
 */
@Component({
  tag: 'amalitech-select-option',
  styleUrl: 'amalitech-select-option.scss',
  shadow: true,
})
export class AmalitechSelectOption {
  @Element() el: HTMLAmalitechSelectOptionElement;
  /**
   * If true, the option is selected
   */
  @Prop({ reflect: true, mutable: true }) selected: boolean = false;
  /**
   * If true, the user cannot interact with the option
   */
  @Prop({ reflect: true }) disabled: boolean = false;
  /**
   * The value of the option
   */
  @Prop({ reflect: true }) value: string;
  /**
   * The style to be applied when items are checked
   */
  @Prop({ reflect: true }) selectedStyle: 'checkmark' | 'checkRounded' | 'dot' = 'checkmark';
  /**
   * This event is triggered when a selection is made
   */
  @Event({ composed: false, bubbles: true }) private selection: EventEmitter<{
    value: string;
    textContent: string;
  }>;
  /**
   * This event is triggered when a selection is removed
   */
  @Event({ composed: false, bubbles: true }) private deselection: EventEmitter<{
    value: string;
    textContent: string;
  }>;

  @Event({ composed: false, bubbles: true }) private clearEvent: EventEmitter<void>;

  async componentDidLoad() {
    if (this.selected) {
      const slot = this.el.shadowRoot?.querySelector('slot');
      const nodes = slot?.assignedNodes();
      const textContent = nodes && nodes[0].textContent;
      this.selection.emit({ value: this.value, textContent: textContent as string });
    }
  }

  private async handleSelect() {
    const slot = this.el.shadowRoot?.querySelector('slot');
    const nodes = slot?.assignedNodes();
    const textContent = nodes && nodes[0].textContent;

    this.selected = !this.selected;

    if (this.selected) {
      this.selection.emit({ value: this.value, textContent: textContent as string });
    } else {
      this.deselection.emit({ value: this.value, textContent: textContent as string });
    }
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      this.el?.click();
    }
  };

  /**
   * Clears the selected state of the option
   */
  @Method()
  async clear() {
    this.selected = false;
    this.clearEvent.emit();
  }

  render() {
    return (
      <Host
        class={{
          selected: this.selected,
          [`selected-style-${this.selectedStyle}`]: true,
        }}
        onClick={() => {
          !this.disabled && this.handleSelect();
        }}
        tabindex={this.disabled ? -1 : 0}
        onfocus={() => document.addEventListener('keydown', this.handleKeyDown)}
        onblur={() => document.removeEventListener('keydown', this.handleKeyDown)}
        disabled={this.disabled}
        aria-disabled={this.disabled ? 'true' : 'false'}
        role="option"
      >
        <slot></slot>
      </Host>
    );
  }
}
