import { Component, h, Host, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'amalitech-visual-picker-item',
  styleUrl: 'amalitech-visual-picker-item.scss',
  shadow: true,
})
export class AmalitechVisualPickerItem {
  /**
   * Indicates whether the item is selected or not
   */
  @Prop({ reflect: true, mutable: true }) selected: boolean = false;
  /**
   * Disables the item thus preventing it from being selectable
   */
  @Prop({ reflect: true }) disabled: boolean = false;
  /**
   * The value for the picker item
   */
  @Prop() value: string = '';
  /**
   * Any label to be used with the item
   */
  @Prop() label: string = '';
  /**
   * Allow single or multiselect of choices. radio for single select, and checkbox for multiple selection
   */
  @Prop() selectVariant: 'checkbox' | 'radio' = 'checkbox';
  /**
   * If set to true the component will only be selected by highlighting the edges, without covering the entire area.
   */
  @Prop() uncoverable: boolean = false;

  /**
   * This event is emitted when the item is selected
   */
  @Event({ composed: false, bubbles: true }) selection: EventEmitter<Record<string, boolean>>;

  private handleSelection = () => {
    if (!this.disabled) {
      switch (this.selectVariant) {
        case 'radio':
          this.selected = true;
          this.selection.emit({ [this.value]: this.selected });
          break;
        case 'checkbox':
          this.selected = !this.selected;
          this.selection.emit({ [this.value]: this.selected });
          break;
        default:
          break;
      }
    }
  };

  render() {
    return (
      <Host role={this.selectVariant} aria-checked={String(!!this.selected)} aria-label={this.label} aria-disabled={String(!!this.disabled)}>
        <button
          onClick={this.handleSelection}
          class={{
            uncoverable: this.uncoverable,
          }}
          disabled={this.disabled}
          type="button"
        >
          <slot></slot>
        </button>
        <p>{this.label}</p>
      </Host>
    );
  }
}
