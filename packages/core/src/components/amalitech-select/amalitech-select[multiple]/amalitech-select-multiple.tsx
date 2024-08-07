import { Component, Prop, h, Host, State, Element, Listen, Event, EventEmitter } from '@stencil/core';
import { SelectIcons } from 'packages/core/src/utils/svg-icons';

@Component({
  tag: 'amalitech-select-multiple',
  styleUrls: ['amalitech-select-multiple.scss', '../shared.styles.scss'],
  shadow: true,
})
export class AmalitechSelectMultiple {
  @Element() el: HTMLAmalitechSelectMultipleElement;
  /**
   * The state of the select component eg: 'single' or 'multiple'
   */
  @Prop() state: 'single' | 'multiple' = 'multiple';
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

  /**
   * This event is triggered when a selection is removed
   */
  @Event() private multiDeselection: EventEmitter<{
    value: string;
    textContent: string;
  }>;

  @State() selectedOptions: {
    value: string;
    textContent: string;
  }[] = [];

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
    if (this.state === 'multiple') {
      const { textContent, value } = event.detail;
      this.selectedOptions = [...this.selectedOptions, { value, textContent }];
      this.open = true;
    }
  }

  @Listen('deselection')
  handleDeselection(event: CustomEvent) {
    if (this.state === 'multiple') {
      const { textContent } = event.detail;
      this.selectedOptions = this.selectedOptions.filter(o => o.textContent !== textContent);
      this.open = true;
    }
  }

  @Listen('clearEvent')
  handleClear() {
    this.selectedOptions = [];
  }

  private deselectOnClick(event: Event, index: number) {
    this.el
      .querySelector('slot')
      ?.assignedElements()
      .forEach(element => {
        if (element.textContent === (event.target as HTMLElement).textContent) {
          //@ts-ignore
          element.selected = false;
        }
      });
    this.multiDeselection.emit({
      value: this.selectedOptions[index].value,
      textContent: this.selectedOptions[index].textContent,
    });

    this.selectedOptions = this.selectedOptions.filter((_, i) => i !== index);
  }

  render() {
    return (
      <Host>
        {this.required && <div class="required">Required</div>}
        <button onClick={() => (this.open = !this.open)} disabled={this.disabled}>
          {this.selectedOptions.length > 0 ? (
            <ul>
              {this.selectedOptions.map((opt, index) => (
                <li
                  key={index}
                  onClick={e => {
                    this.deselectOnClick(e, index);
                    e.stopPropagation();
                  }}
                >
                  {opt.textContent}
                </li>
              ))}
            </ul>
          ) : (
            this.label
          )}
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
