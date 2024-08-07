import { Component, ComponentInterface, Element, Event, EventEmitter, Host, Prop, Watch, h } from '@stencil/core';
import { RadioGroupChangeEventDetail } from './radio-group-inteface';

@Component({
  tag: 'amalitech-radio-group',
  styleUrl: 'amalitech-radio-group.scss',
})
export class AmalitechRadioGroup implements ComponentInterface {
  private inputId = `amalitech-rg-${radioGroupIds++}`;
  private labelId = `${this.inputId}-lbl`;
  private label?: HTMLElement | null;

  @Element() element: HTMLAmalitechRadioGroupElement;

  /**
   * The name of the control, which is submitted with the form data.
   */
  @Prop() name: string = this.inputId;

  /**
   * the value of the radio group.
   */
  @Prop({ mutable: true }) value?: any | null;

  @Watch('value')
  valueChanged(value: any | undefined) {
    this.setRadioTabindex(value);

    this.valueChange.emit({ value });
  }

  /**
   * Emitted when the value has changed.
   */
  @Event() valueChange!: EventEmitter<RadioGroupChangeEventDetail>;

  componentDidLoad() {
    this.setRadioTabindex(this.value);
  }

  private setRadioTabindex = (value: any | undefined) => {
    const radios = this.getRadios();

    // Get the first radio that is not disabled and the checked one
    const first = radios.find(radio => !radio.disabled);
    const checked = radios.find(radio => radio.value === value && !radio.disabled);

    if (!first && !checked) {
      return;
    }
  };

  private getRadios(): any[] {
    return Array.from(this.element.querySelectorAll('amalitech-radio-button'));
  }

  private onClick = (event: FocusEvent) => {
    event.preventDefault();

    const selectedRadio = event.target && (event.target as HTMLElement).closest('amalitech-radio-button');

    if (selectedRadio) {
      const currentValue = this.value;
      const newValue = selectedRadio.value;
      if (newValue !== currentValue && !selectedRadio.disabled) {
        this.value = newValue;
      }
      selectedRadio.setFocus(event);
    }
  };

  render() {
    const { name, labelId, label } = this;

    return <Host role="radiogroup" aria-labelledby={label ? labelId : null} onClick={this.onClick} name={name}></Host>;
  }
}

let radioGroupIds = 0;
