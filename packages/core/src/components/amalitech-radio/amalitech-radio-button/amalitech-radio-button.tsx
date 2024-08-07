import { Component, Host, h, Prop, Element, State, EventEmitter, Event, Method } from '@stencil/core';

@Component({
  tag: 'amalitech-radio-button',
  styleUrl: 'amalitech-radio-button.scss',
  shadow: true,
})
export class AmalitechRadioButton {
  @Element() private element: HTMLAmalitechRadioButtonElement;

  private radiobutton: HTMLElement | null = null;
  private nativeInput!: HTMLInputElement;
  private radioGroup: any | null = null;

  /**
   * If `true`, the radio is focused.
   */
  @State() focused: boolean = false;

  /**
   * If `true`, the radio is selected.
   */
  @State() checked: boolean = false;

  /**
   * the value of the radio.
   */
  @Prop() value?: any | null;

  /**
   * Identifier of the focus input to match a label defined for the component.
   */
  @Prop() inputId: string = `amalitech-rb-${radiobuttonIds++}`;

  /**
   * Label of the radiobutton.
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
  @Prop() labelStyleClass?: string = '';

  /**
   * When present, it specifies that the element should be disabled.
   */
  @Prop() disabled: boolean = false;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /**
   * If `true`, the radio button has a double border.
   */
  @Prop() doubleBorder: boolean = false;

  /**
   * Index of the element in tabbing order
   */
  @Prop() anyTabIndex?: number = 0;

  /**
   * Callback to invoke on radio button select.
   */
  @Event() aOnSelect?: EventEmitter;

  /**
   * Callback to invoke when the radio button receives focus.
   */
  @Event() aOnFocus?: EventEmitter;

  /**
   * Callback to invoke when the radio button loses focus.
   */
  @Event() aOnBlur?: EventEmitter;

  /**
   * Applies focus.
   */
  @Method()
  async setFocus(event: FocusEvent) {
    event.stopPropagation();
    event.preventDefault();

    this.radiobutton?.focus();
  }

  connectedCallback() {
    if (this.value === undefined) {
      this.value = this.inputId;
    }
    const radioGroup = (this.radioGroup = this.element.closest('amalitech-radio-group'));
    if (radioGroup) {
      this.updateState();
      radioGroup.addEventListener('valueChange', this.updateState);
    }
  }

  disconnectedCallback() {
    const radioGroup = this.radioGroup;
    if (radioGroup) {
      radioGroup.removeEventListener('valueChange', this.updateState);
      this.radioGroup = null;
    }
  }

  private updateState = () => {
    if (this.radioGroup) {
      this.checked = this.radioGroup.value === this.value;
    }
  };

  componentDidLoad() {
    this.radiobutton = this.element.shadowRoot?.querySelector("input[type='radio']") as HTMLElement;
  }

  private onClick(event: Event, focus: boolean) {
    event.preventDefault();

    if (this.disabled) {
      return;
    }

    this.checked = this.nativeInput.checked;

    this.aOnSelect?.emit(event);

    if (focus) {
      this.radiobutton?.focus();
    }
  }

  private onFocus(event: Event) {
    this.focused = true;
    this.aOnFocus?.emit(event);
  }

  private onBlur(event: Event) {
    this.focused = false;
    this.aOnBlur?.emit(event);
  }

  render() {
    const { checked, focused, disabled } = this;

    return (
      <Host>
        <div class="amalitech-element amalitech-element-flex">
          <div
            style={this.anyStyle}
            class={
              'amalitech-radiobutton amalitech-component ' +
              (this.styleClass ? ' ' + this.styleClass : '') +
              (checked ? ' amalitech-radiobutton-checked' : '') +
              (focused ? ' amalitech-radiobutton-focused' : '') +
              (disabled ? ' amalitech-radiobutton-disabled' : '')
            }
            role="radio"
          >
            <div class="amalitech-hidden-accessible">
              <input
                type="radio"
                id={this.inputId}
                name={this.name}
                checked={checked}
                disabled={disabled}
                value={this.value}
                aria-checked={`${checked}`}
                tabindex={this.anyTabIndex}
                onFocus={e => {
                  this.onFocus(e);
                }}
                onBlur={e => {
                  this.onBlur(e);
                }}
                ref={nativeEl => (this.nativeInput = nativeEl as HTMLInputElement)}
              />
            </div>
            <span
              class={{
                [`visible`]: this.doubleBorder,
              }}
            >
              <div
                class={'amalitech-radiobutton-box ' + (checked ? ' amalitech-highlight' : '') + (focused ? ' amalitech-focus' : '') + (disabled ? ' amalitech-disabled' : '')}
                onClick={e => {
                  this.onClick(e, true);
                }}
              >
                <span class="amalitech-radiobutton-icon"></span>
              </div>
            </span>
          </div>
          <label
            class={{
              'amalitech-radiobutton-label': true,
              [`${this.labelStyleClass}`]: this.labelStyleClass !== null ? true : false,
              'amalitech-radiobutton-label-active': checked,
              'amalitech-radiobutton-label-focus': focused,
              'amalitech-disabled': disabled,
            }}
            onClick={e => {
              this.onClick(e, true);
            }}
          >
            {this.label}
          </label>
        </div>
      </Host>
    );
  }
}

let radiobuttonIds = 0;
