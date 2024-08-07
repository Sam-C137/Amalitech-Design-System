import { Component, h, State, Prop, Listen, Element, Event, EventEmitter, Host, Method } from '@stencil/core';

/**
 * The Select component is a custom element designed to be used with child select-option elements.
 * @slot - This defualt slot is deignated for use with select-option elements.
 */
@Component({
  tag: 'amalitech-select',
  styleUrl: 'amalitech-select.scss',
  shadow: true,
})
export class AmalitechSelect {
  @Element() el: HTMLAmalitechSelectElement;
  /**
   * The label of the select component eg: 'Select a fruit' or 'Select a car'
   */
  @Prop() label: string;
  /**
   * The style to be applied when items are checked
   */
  @Prop({ reflect: true }) selectedStyle: 'checkmark' | 'checkRounded' | 'dot' = 'checkmark';
  /**
   * If true, the user cannot interact with the select component.
   */
  @Prop({ reflect: true }) disabled: boolean = false;
  /**
   * If true, the user can select multiple options at once.
   */
  @Prop() multiple: boolean = false;
  /**
   * Toggles the open state of the dropdown
   */
  @Prop({ reflect: true, mutable: true }) open: boolean = false;
  /**
   * If true, the dropdown will be scrollable
   */
  @Prop() scrollable: boolean;
  /**
   * If true, the select component will be required
   */
  @Prop() required: boolean;
  /**
   * This event emmits the value of the selected option or an array of values if option is multiple
   */
  @Event() amalitechChange: EventEmitter<Record<string, string | string[]>>;

  @State() values: string[] = [];
  @State() textContents: string[] = [];

  componentDidLoad() {
    this.el.querySelectorAll('amalitech-select-option').forEach(item => {
      item.selectedStyle = this.selectedStyle;
    });
  }

  @Listen('selection')
  handleSelection(event: CustomEvent) {
    const { value, textContent } = event.detail;
    if (this.multiple) {
      this.open = true;
      this.values = [...this.values, value];
      this.textContents = [...this.textContents, textContent];
      this.amalitechChange.emit({ values: this.values, textContents: this.textContents });
    } else {
      this.open = false;
      this.amalitechChange.emit({ value, textContent });

      /**
       * If this is a single select, deselect all other options
       */
      this.el.querySelectorAll('amalitech-select-option').forEach(item => {
        if (item.value !== value) {
          item.selected = false;
        }
      });
    }
  }

  @Listen('deselection')
  handleDeselection(event: CustomEvent) {
    if (this.multiple) {
      const { value, textContent } = event.detail;
      const index = this.values.indexOf(value);
      if (index > -1) {
        this.values = this.values.filter(o => o !== value);
        this.textContents = this.textContents.filter(tc => tc !== textContent);
      }
      this.amalitechChange.emit({ values: this.values, textContents: this.textContents });
    } else {
      this.open = false;
      this.amalitechChange.emit({ value: '', textContent: '' });
    }
  }

  @Listen('multiDeselection')
  handleMultiDeselection(event: CustomEvent) {
    const { value, textContent } = event.detail;
    const index = this.values.indexOf(value);
    if (index > -1) {
      this.values = this.values.filter(o => o !== value);
      this.textContents = this.textContents.filter(tc => tc !== textContent);
    }
    this.amalitechChange.emit({ values: this.values, textContents: this.textContents });
  }

  /**
   * This method clears all selected options
   */
  @Method()
  async clear() {
    this.el.querySelectorAll('amalitech-select-option').forEach(item => {
      item.clear();
    });
    this.values = [];
    this.textContents = [];
    this.amalitechChange.emit({ values: this.values, textContents: this.textContents });
  }

  render() {
    return (
      <Host role="listbox" aria-label={this.label} aria-required={this.required ? 'true' : 'false'}>
        {this.multiple ? (
          <amalitech-select-multiple
            required={this.required}
            scrollable={this.scrollable}
            label={this.label}
            open={this.open}
            state={this.multiple ? 'multiple' : 'single'}
            disabled={this.disabled}
          >
            <slot></slot>
          </amalitech-select-multiple>
        ) : (
          <amalitech-select-single
            required={this.required}
            scrollable={this.scrollable}
            label={this.label}
            open={this.open}
            state={this.multiple ? 'multiple' : 'single'}
            disabled={this.disabled}
          >
            <slot></slot>
          </amalitech-select-single>
        )}
      </Host>
    );
  }
}
