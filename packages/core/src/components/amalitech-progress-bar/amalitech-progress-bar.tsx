import { Component, h, Host, Prop } from '@stencil/core';
import { ProgressBarIcons } from '../../utils/svg-icons';

@Component({
  tag: 'amalitech-progress-bar',
  styleUrl: 'amalitech-progress-bar.scss',
  shadow: true,
})
export class AmalitechProgressBar {
  /**
   * The current value.
   */
  @Prop() value: number = 0;

  /**
   * The minimum value.
   */
  @Prop() minimumValue: number = 0;

  /**
   * The maximum value.
   */
  @Prop() maximumValue: number = 100;

  /**
   * A label describing the progress bar.
   */
  @Prop() label: string;

  /**
   * Provide a hint to the user of what's happening.
   */
  @Prop() helperText: string;

  /**
   *
   * Possible values are: `"sm"`, `"lg"` and `"md"` in pixel. Defaults to `"sm"`.
   */
  @Prop() size: 'sm' | 'md' | 'lg' = 'sm';

  /**
   * Hides the label.
   */
  @Prop() hideLabel: boolean = false;

  /**
   * The status of the progress bar.
   */
  @Prop() status: 'active' | 'success' | 'error' = 'active';

  /**
   * If `true`, the progress bar will be displayed as an indeterminate progress bar.
   */
  @Prop() indeterminate: boolean = false;

  /**
   * Hides the value.
   */
  @Prop() hideValue: boolean = false;

  private getRenderIconOrValue() {
    if (this.status === 'success') {
      return ProgressBarIcons.successIcon();
    } else if (this.status === 'error') {
      return ProgressBarIcons.errorIcon();
    } else if (this.status === 'active') {
      return this.hideValue ? '' : <span>{this.value}</span>;
    }
  }

  render() {
    let relativeValue = ((this.value - this.minimumValue) / (this.maximumValue - this.minimumValue)) * 100;
    return (
      <Host>
        <div
          class={{
            progress: true,
            [`size-${this.size}`]: true,
            [`status-${this.status}`]: true,
            indeterminate: this.indeterminate && this.status === 'active',
          }}
        >
          {!this.hideLabel && (
            <div class="progress-header">
              <label class="progress-label">{this.label}</label>
              {this.getRenderIconOrValue()}
            </div>
          )}
          <div class="progress-track">
            <div
              class="progress-bar"
              role="progressbar"
              style={{ width: `${relativeValue}%` }}
              aria-valuenow={this.value}
              aria-valuemin={this.minimumValue}
              aria-valuemax={this.maximumValue}
            ></div>
          </div>
          <div class="progress-helper">{this.helperText}</div>
        </div>
      </Host>
    );
  }
}
