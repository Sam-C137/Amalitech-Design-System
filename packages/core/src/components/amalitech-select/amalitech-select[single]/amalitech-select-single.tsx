import { Component, Prop, h, Host, State, Element, Listen } from '@stencil/core';
import { SelectIcons } from 'packages/core/src/utils/svg-icons';

@Component({
  tag: 'amalitech-select-single',
  styleUrls: ['amalitech-select-single.scss', '../shared.styles.scss'],
  shadow: true,
})
export class AmalitechSelectSingle {
  @Element() el: HTMLAmalitechSelectSingleElement;
  /**
   * The state of the select component eg: 'single' or 'multiple'
   */
  @Prop() state: 'single' | 'multiple' = 'single';
  /**
   * The label of the select component eg: 'Select a fruit' or 'Select a car'
   */
  @Prop() label: string;
  /**
   * Toggles the open state of the dropdown
   */
  @Prop({ reflect: true, mutable: true }) open: boolean = false;
  /**
   * If true, the dropdown will be scrollable
   */
  @Prop() scrollable: boolean;
  /**
   * If true, the user cannot interact with the select component.
   */
  @Prop() disabled: boolean;
  /**
   * If true, the select component will be required
   */
  @Prop() required: boolean;

  @State() selectedOption: string = '';

  componentDidLoad() {
    document.addEventListener('click', this.handleClickOutside);
  }

  private handleClickOutside = (event: MouseEvent) => {
    if (!this.open) {
      return;
    }
    if (!event.composedPath().includes(this.el as Node)) {
      this.open = false;
    }
  };

  @Listen('selection')
  handleSelection(event: CustomEvent) {
    if (this.state === 'single') {
      const { textContent } = event.detail;
      this.selectedOption = textContent;
      this.open = false;
    }
  }

  @Listen('deselection')
  handleDeselection() {
    if (this.state === 'single') {
      this.selectedOption = '';
      this.open = false;
    }
  }

  @Listen('clearEvent')
  handleClear() {
    this.selectedOption = '';
  }

  render() {
    return (
      <Host>
        {this.required && <div class="required">Required</div>}
        <button onClick={() => (this.open = !this.open)} disabled={this.disabled}>
          {this.selectedOption || this.label}
          {this.open ? (
            <span
              class={{
                [`arrow-up`]: true,
              }}
            >
              {SelectIcons.arrowIcon()}
            </span>
          ) : (
            <span
              class={{
                [`arrow-down`]: true,
              }}
            >
              {SelectIcons.arrowIcon()}
            </span>
          )}
        </button>
        <section
          class={{
            ['dropdown']: true,
            ['open']: this.open,
            ['scrollable']: this.scrollable,
          }}
        >
          <slot></slot>
        </section>
      </Host>
    );
  }
}
