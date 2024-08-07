import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'amalitech-progress',
  styleUrl: 'amalitech-progress.scss',
  shadow: true,
})
export class AmalitechProgress {
  /**
   * Defines the string value or identifies the element (or elements)
   * that label the progressbar element providing an accessible name.
   */
  @Prop({ reflect: true }) labeledBy: string;

  /**
   * Set to a decimal value representing the maximum value, and greater
   * than min-value. If not present, the default value is 100.
   */
  @Prop({ reflect: true }) maxValue = 100;

  /**
   * Set to a decimal value representing the minimum value, and less
   * than max-value. If not present, the default value is 0.
   */
  @Prop({ reflect: true }) minValue = 0;

  /**
   * Only present and required if the value is not indeterminate.
   * Set to a decimal value between 0, or valuemin if present,
   * and max-value indicating the current value of the progress bar.
   */
  @Prop({ reflect: true }) currentValue: number;

  /**
   * Assistive technologies often present the value of current-value
   * as a percentage. If this would not be accurate use this property
   * to make the progress bar value understandable.
   */
  @Prop({ reflect: true }) valueText: string;

  /** Used to show indeterminate or pending progress state. */
  @Prop() indeterminate: boolean;
  // indeterminate

  /** Divides progress bar in multiple progress steps. */
  @Prop() steps: boolean;

  get classNames() {
    return {
      [`amalitech-progress`]: true,
      [`amalitech-progress--indeterminate`]: this.currentValue === undefined,
      [`amalitech-progress--pending`]: this.indeterminate !== undefined && this.indeterminate !== false,
      [`amalitech-progress--steps`]: this.steps !== undefined && this.steps !== false,
    };
  }

  render() {
    return (
      <Host
        class={this.classNames}
        role="progressbar"
        style={{
          ...(this.maxValue !== undefined && {
            '--amalitech-progress-valuemax': this.maxValue + '',
          }),
          ...(this.minValue !== undefined && {
            '--amalitech-progress-valuemin': this.minValue + '',
          }),
          ...(this.currentValue !== undefined && {
            '--amalitech-progress-valuenow': this.currentValue + '',
          }),
        }}
      >
        {!this.steps && !this.indeterminate && <div class="amalitech-progress-value">{this.currentValue}</div>}
      </Host>
    );
  }
}
