import { Component, Host, h, Prop, Element, Event, EventEmitter, State, Watch, Method } from '@stencil/core';
import { renderHiddenInput } from '../../utils/helpers';
import { CheckBoxIcons } from '../../utils/svg-icons';

/**
 * Checkbox is an extension to the standard checkbox element with theming.
 *
 * @part amalitech-checkbox-box-highlight - This represents the container that encapsulates the checkbox mark and its associated visual elements.
 * @part amalitech-checkbox-box - This refers to the actual checkmark symbol within the checkbox, indicating the checked state of the component.
 * @slot label - Represents the label or content associated with the checkbox.
 *   Use this slot to provide descriptive text or additional content that accompanies the checkbox.
 */
@Component({
  tag: 'amalitech-checkbox',
  styleUrl: 'amalitech-checkbox.scss',
  shadow: true,
})
export class AmalitechCheckbox {
  @Element() private element: HTMLAmalitechCheckboxElement;

  @State() focused: boolean = false;

  private checkbox: HTMLElement | null = null;

  /**
   * If `true`, the checkbox is selected.
   */
  @Prop({ mutable: true }) checked: boolean = false;

  /**
   * Allows to select a boolean value instead of multiple values.
   */
  @Prop() binary: boolean = false;

  /**
   * Identifier of the focus input to match a label defined for the component.
   */
  @Prop() inputId: string = `amalitech-cb-${checkboxIds++}`;

  /**
   * Name of the checkbox group.
   */
  @Prop() name: string = this.inputId;

  /**
   * Index of the element in tabbing order
   */
  @Prop() anyTabIndex: number = 0;

  /**
   * The value of the checkbox does not mean if it's checked or not, use the `checked`
   * property for that.
   *
   * The value of a checkbox is analogous to the value of an `<input type="checkbox">`,
   * it's only used when the checkbox participates in a native `<form>`.
   */
  @Prop({ mutable: true }) value: any = 'on';

  /**
   * Label of the checkbox.
   */
  @Prop() label: string = '';

  /**
   * Inline style of the component.
   */
  @Prop() anyStyle: any = null;

  /**
   * Style class of the component.
   */
  @Prop() styleClass: any = null;

  /**
   * Style class of the label.
   */
  @Prop() labelStyleClass: any = null;

  /**
   * When present, it specifies that the element should be disabled.
   */
  @Prop() disabled: boolean = false;

  /**
   * When present, it specifies that the component cannot be edited.
   */
  @Prop() readonly: boolean = false;

  /**
   * Icon class of the checkbox icon.
   */
  @Prop() checkboxIcon: string = 'fa-solid:check';

  /**
   * Callback to invoke when value of dropdown changes.
   */
  @Event({ composed: false }) valueChange: EventEmitter;

  /**
   * Emitted when the toggle has focus.
   */
  @Event() aOnFocus?: EventEmitter;

  /**
   * Emitted when the toggle loses focus.
   */
  @Event() aOnBlur?: EventEmitter;

  @Watch('checked')
  checkedChanged(isChecked: boolean) {
    let value = this.value;
    if (this.binary) {
      value = isChecked;
      this.value = isChecked;
    }
    this.valueChange.emit({
      checked: isChecked,
      value: value,
    });
  }

  componentDidLoad() {
    this.checkbox = this.element.shadowRoot?.querySelector("input[type='checkbox']") as HTMLElement;
  }

  private onClick(event: Event, focus: boolean) {
    event.preventDefault();

    if (this.disabled || this.readonly) {
      return;
    }

    this.checked = !this.checked;

    if (focus) {
      this.checkbox?.focus();
    }
  }

  private onFocus() {
    this.focused = true;
    this.aOnFocus?.emit();
    this.inputFocus();
  }

  private onBlur() {
    this.focused = false;
    this.aOnBlur?.emit();
  }

  private handleChange(event: Event) {
    if (!this.readonly) {
      this.checked = (event.target as HTMLInputElement).checked;
    }
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      this.checkbox?.click();
    }
  };

  /**
   * Focuses on the checkbox element.
   */
  @Method()
  async inputFocus() {
    this.checkbox?.focus();
  }

  render() {
    const { checked, disabled, element, name, value } = this;

    renderHiddenInput(true, element, name, checked ? value : '', disabled);

    return (
      <Host
        role="checkbox"
        tabindex={this.anyTabIndex}
        aria-label={this.label}
        onfocus={() => {
          this.onFocus();
          document.addEventListener('keydown', this.handleKeyDown);
        }}
        onblur={() => {
          this.onBlur();
          document.removeEventListener('keydown', this.handleKeyDown);
        }}
      >
        <div class="amalitech-element amalitech-element-flex">
          <div
            class={`
            amalitech-checkbox amalitech-component
            ${this.styleClass ? ' ' + this.styleClass : ''}
            ${checked ? ' amalitech-checkbox-checked' : ''}
            ${this.focused ? ' amalitech-checkbox-focused' : ''}
            ${disabled ? ' amalitech-checkbox-disabled' : ''}
          `}
            style={this.anyStyle}
          >
            <div class="amalitech-hidden-accessible">
              <input
                type="checkbox"
                id={this.inputId}
                name={this.name}
                checked={checked}
                value={this.value}
                aria-checked={`${checked}`}
                aria-disabled={disabled ? 'true' : 'false'}
                aria-readonly={this.readonly ? 'true' : 'false'}
                aria-hidden="true"
                disabled={disabled}
                tabindex={-1}
                onChange={e => this.handleChange(e)}
              />
              <slot name="label" />
            </div>
            <div
              part={checked ? 'amalitech-checkbox-box-highlight' : 'amalitech-checkbox-box'}
              class={'amalitech-checkbox-box' + (checked ? ' amalitech-highlight' : '') + (this.focused ? ' amalitech-focus' : '') + (disabled ? ' amalitech-disabled' : '')}
              onClick={e => this.onClick(e, true)}
            >
              <span style={{ visibility: checked ? 'visible' : 'hidden' }}>{CheckBoxIcons.checkIcon({ marginTop: '0.2rem' })}</span>
            </div>
          </div>
          {this.label && (
            <label
              onClick={e => this.onClick(e, true)}
              htmlFor={this.inputId}
              class={`
            amalitech-checkbox-label 
            ${this.labelStyleClass ? ' ' + this.labelStyleClass : ''}
            ${checked ? ' amalitech-checkbox-label-active' : ''}
            ${this.focused ? ' amalitech-checkbox-label-focus' : ''}
            ${disabled ? ' amalitech-disabled' : ''}
            `}
            >
              {this.label}
            </label>
          )}
        </div>
      </Host>
    );
  }
}

let checkboxIds = 0;
