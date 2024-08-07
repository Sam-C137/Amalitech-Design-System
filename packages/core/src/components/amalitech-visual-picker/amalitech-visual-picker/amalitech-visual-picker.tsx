import { Component, h, Host, Prop, State, Element, Listen, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'amalitech-visual-picker',
  styleUrl: 'amalitech-visual-picker.scss',
  shadow: true,
})
export class AmalitechVisualPicker {
  @Element() el: HTMLAmalitechVisualPickerElement;
  /**
   * If set to true the component will only be selected by highlighting the edges, without covering the entire area.
   */
  @Prop() uncoverable: boolean = false;
  /**
   * Allow single or multiselect of choices. radio for single select, and checkbox for multiple selection
   */
  @Prop() selectVariant: 'checkbox' | 'radio' = 'checkbox';
  /**
   * Specifies the direction of the visual picker
   */
  @Prop() align: 'horizontal' | 'vertical' = 'horizontal';
  /**
   * Disables the entire component
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  @State() childrenElements: HTMLAmalitechVisualPickerItemElement[] = [];

  /**
   * This event is emitted when the selected items change
   */
  @Event() pickerChange: EventEmitter<{
    value: string | string[];
  }>;

  componentWillLoad() {
    this.childrenElements = Array.from(this.el.children).filter(el => el.tagName === 'AMALITECH-VISUAL-PICKER-ITEM') as HTMLAmalitechVisualPickerItemElement[];
    this.childrenElements.forEach(el => {
      el.selectVariant = this.selectVariant;
      el.uncoverable = this.uncoverable;
      el.disabled ? null : (el.disabled = this.disabled);
    });
  }

  @Listen('selection')
  handleSelection(e: CustomEvent) {
    if (this.selectVariant === 'radio') {
      const val = Object.keys(e.detail)[0];
      this.childrenElements.forEach(el => {
        if (el.value !== val) {
          el.selected = false;
        }
      });
      this.pickerChange.emit({ value: val });
    } else {
      this.pickerChange.emit({ value: this.childrenElements.filter(el => el.selected).map(el => el.value) });
    }
  }

  render() {
    return (
      <Host
        class={{
          [`align-${this.align}`]: true,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
