import { Component, Host, State, h, Prop, Event, EventEmitter, Watch, Element, Method } from '@stencil/core';

/**
 * The Input component is a wrapper to the HTML input element with custom styling and additional
 * functionality.
 *
 * @part input-field - The main input text element.
 * @slot iconLeft - Slot for an icon to be placed on the left side of the input.
 * @slot start - Slot for content to be placed at the start of the input.
 * @slot end - Slot for content to be placed at the end of the input.
 *
 */
@Component({
  tag: 'amalitech-input',
  styleUrl: 'amalitech-input.scss',
  shadow: true,
})
export class AmalitechInput {
  @Element() element: HTMLAmalitechInputElement;

  /**
   * Value of the input text
   */
  @Prop({ mutable: true }) value: string = '';

  /**
   * Identifier of the focus input to match a label defined for the component.
   */
  @Prop() inputId: string = `input-text-${inputIds++}`;

  /**
   * Name of the input text.
   */
  @Prop() name: string = this.inputId;

  /**
   * Label of the input text
   */
  @Prop() label: string = '';

  /**
   * Input type
   */
  @Prop() type:
    | 'email'
    | 'hidden'
    | 'number'
    | 'password'
    | 'tel'
    | 'text'
    | 'date'
    | 'month' // example yyyy-mm
    | 'week' // example yyyy-W##
    | 'time' // example hh:mm
    | 'datetime-local' // example yyyy-mm-ddThh:mm
    | 'url' = 'text';

  /**
   * When enabled, the label will have floating effect on input text focus
   */
  @Prop() floatLabel: boolean = false;

  /**
   * The class of input wrapper element
   */
  @Prop() inputWrapperClass: any = null;

  /**
   * The class of input holder element
   */
  @Prop() inputHolderClass: any = null;

  /**
   * When present, it specifies that the element should be disabled
   */
  @Prop() disabled: boolean = false;

  /**
   * When present, it specifies that the element value cannot be changed
   */
  @Prop() readonly: boolean = false;

  /**
   * Default text to display when no value in input text
   */
  @Prop() placeholder: string = '';

  /**
   * The class of left icon wrapper element
   */
  @Prop() leftIconClass: any = null;

  /**
   * Inline style of the input element
   */
  @Prop() inputStyle?: any = null;

  /**
   * Inline style for the entire element
   */
  @Prop() styles?: string;

  /**
   * Inline style of the element
   */
  @Prop() inputClass?: any = null;

  /**
   * Size of the input field.
   */
  @Prop() size: number;

  /** (optional) define the numeric maximum value of input types such as month, date, time */
  @Prop() max?: number;

  /** (optional) defines the numeric minimum value of input types such as month, date, time */
  @Prop() min?: number;

  /** (optional) Input text string min length */
  @Prop() minLength?: number;

  /**
   * Maximum number of character allows in the input field.
   */
  @Prop() maxLength?: number;

  /** (optional) Input counter */
  @Prop() counter: boolean = false;

  /** (optional) input list */
  @Prop() list?: string;

  /** (optional) id or space separated list of ids of elements that provide or link to additional related information. */
  @Prop() ariaDetailedId?: string;

  /**
   * Specifies tab order of the element.
   */
  @Prop() anyTabIndex: string;

  /**
   * Title text of the input text.
   */
  @Prop() aTitle: string;

  /** (optional) the input should automatically get focus when the page loads. */
  @Prop() autofocus: boolean = false;

  /**
   * Used to indicate that user input is required on an element before a form can be submitted.
   */
  @Prop() anyAriaRequired: boolean;
  /**
   * When present, it specifies that an input field is required.
   */
  @Prop() required: boolean = false;

  /**
   * Used to define a string that autocomplete attribute the current element.
   */
  @Prop() autocomplete: string;

  /** (optional) Input helper text */
  @Prop() helperText?: string = '';

  /**
   * Regular expression for input field
   */
  @Prop() pattern?: string;

  /**
   * Callback to invoke when value of input text changes
   */
  @Event() valueChange: EventEmitter;

  @State() isValid: boolean = true;

  componentDidLoad() {
    if (this.element.closest('form')) {
      this.createHiddenInput();
      this.listenForSubmit();
    }
  }

  private createHiddenInput() {
    let hiddenInput = this.element.closest('form')?.querySelector('input[type="hidden"]');
    if (!hiddenInput) {
      hiddenInput = document.createElement('input');
      (hiddenInput as HTMLInputElement).type = 'hidden';
      (hiddenInput as HTMLInputElement).name = this.name;
      this.element.closest('form')?.appendChild(hiddenInput);
    }
    (hiddenInput as HTMLInputElement).value = this.value;
  }

  private listenForSubmit() {
    this.element.onfocus = () => {
      document.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          this.element.closest('form')?.submit();
        }
      });
    };

    this.element.closest('form')?.addEventListener('submit', e => {
      if (!this.isValid) {
        e.preventDefault();
        this.element.querySelector('input')?.focus();
      }
    });
  }

  @Watch('value')
  valueChanged() {
    const inputEl = this.element.querySelector('input');
    // only update if model and view differ
    if (inputEl?.value !== this.value && inputEl) {
      inputEl.value = this.value as string;
    }
  }

  /**
   * Retrieves a reference to the input element within the component.
   *
   * @returns {HTMLInputElement | null} The input element, or null if not found.
   * @example
   * const inputElement = await myComponent.getInputRef();
   * if (inputElement) {
   *   // Do something with the input element
   *   inputElement.focus();
   * }
   */
  @Method()
  async getInputRef(): Promise<HTMLInputElement | null> {
    return this.element.querySelector('input');
  }

  private inputChanged = (ev: any) => {
    let val = ev.target && ev.target.value;

    if (Boolean(this.pattern)) {
      this.isValid = new RegExp(this.pattern!).test(val);
    }

    if (this.value !== val) {
      this.value = val;
      this.valueChange.emit(this.value);
      this.createHiddenInput();
    }
  };

  render() {
    const ariaDetailedById = { 'aria-details': this.ariaDetailedId };

    return (
      <Host>
        {this.styles && <style>{this.styles}</style>}
        <div class="element">
          <div class={this.floatLabel ? ' float-label ' + (this.inputWrapperClass ? this.inputWrapperClass : '') : this.inputWrapperClass}>
            {this.label && !this.floatLabel && (
              <div class="input-top">
                <label class="label-text" htmlFor={this.inputId}>
                  {this.label}
                </label>

                {this.required && <p class="required-text">{this.required && <span> Required</span>}</p>}
              </div>
            )}
            <i class={this.leftIconClass ? this.leftIconClass + ' iconify' : 'iconify'}>
              <slot name="iconLeft" />
            </i>
            <span class={(this.floatLabel ? 'float-label ' : '') + (this.inputHolderClass ? this.inputHolderClass : '')}>
              <slot name="start" />
              <input
                part="input-field"
                id={this.inputId}
                name={this.name}
                disabled={this.disabled}
                readonly={this.readonly}
                placeholder={this.placeholder}
                type={this.type}
                style={this.inputStyle}
                size={this.size}
                min={this.min}
                max={this.max}
                list={this.list}
                minLength={this.minLength}
                maxlength={this.maxLength}
                tabindex={this.anyTabIndex}
                title={this.aTitle}
                aria-required={this.anyAriaRequired}
                required={this.required}
                autocomplete={this.autocomplete}
                autofocus={this.autofocus}
                class={
                  (Boolean(this.value) ? 'component input-field corner-all filled' : 'component input-field corner-all') +
                  (this.inputClass ? ' ' + this.inputClass : '') +
                  (this.leftIconClass || this.element.querySelector('[slot="iconLeft"]') ? ' input-with-icon' : '') +
                  (Boolean(this.value) ? ' filled' : '') +
                  (this.isValid ? '' : ' error')
                }
                value={this.value}
                onInput={e => this.inputChanged(e)}
                {...ariaDetailedById}
              />
              <slot name="end" />
              {this.label && this.floatLabel && <label htmlFor={this.inputId}>{this.label}</label>}
            </span>
          </div>

          {(this.helperText || this.counter) && (
            <div class="input-bottom">
              {this.helperText && (
                <div aria-live="polite" aria-relevant="additions removals" class="helper-text">
                  {this.helperText}
                </div>
              )}

              {this.counter && (
                <div class="counter">
                  {Boolean(this.value) ? String(this.value).length : 0} / {this.maxLength}
                </div>
              )}
            </div>
          )}
        </div>
      </Host>
    );
  }
}

let inputIds = 0;
