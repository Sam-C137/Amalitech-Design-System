import { Component, Host, Prop, State, Watch, h } from '@stencil/core';
import { color } from '../../global/variables';

@Component({
  tag: 'amalitech-progress-ring',
  styleUrl: 'amalitech-progress-ring.scss',
  shadow: true,
})
export class AmalitechProgressRing {
  /**
   * The radius of the progress ring in px.
   */
  @Prop() radius = 56;
  /**
   * The stroke width of the progress ring in px.
   */
  @Prop() stroke = 6;
  /**
   * The current progress value in percentage.
   */
  @Prop() progress = 0;
  /**
   * The color of the progress ring, in any CSS valid format.
   */
  @Prop() progressColor: string = color.orange500;
  /**
   * The color of the background of the progress ring, in any CSS valid format.
   */
  @Prop() outlineColor: string = color.neutral200;
  /**
   * The text to display inside the progress ring.
   */
  @Prop() progressText?: string;
  /**
   * If the progress ring should be indeterminate.
   */
  @Prop() indeterminate = false;

  @State() normalizedRadius = this.radius - this.stroke * 2;
  @State() circumference = this.normalizedRadius * 2 * Math.PI;
  @State() textFormatted = this.progress + '%';

  @Watch('progress')
  setProgressText() {
    if (!Boolean(this.progressText)) {
      this.textFormatted = this.progress + '%';
    }
  }

  render() {
    const strokeDashoffset = (this.circumference - (this.progress / 100) * this.circumference).toString();

    return (
      <Host role="progressbar" aria-labelledby="progressring" aria-valuemin="0" aria-valuemax="100" aria-valuenow={this.indeterminate ? undefined : this.progress.toString()}>
        <svg height={this.radius * 2} width={this.radius * 2}>
          <circle stroke={this.outlineColor} class="outline" fill="transparent" stroke-width={this.stroke} r={this.normalizedRadius} cx={this.radius} cy={this.radius} />
          <circle
            stroke={this.progressColor}
            class={{
              ['progress']: true,
              ['indeterminate']: this.indeterminate,
            }}
            fill="transparent"
            stroke-width={this.stroke}
            stroke-dasharray={this.circumference + ' ' + this.circumference}
            style={{ strokeDashoffset }}
            r={this.normalizedRadius}
            cx={this.radius}
            cy={this.radius}
          />
          <text x="50%" y="55%" text-anchor="middle">
            {Boolean(this.progressText) ? this.progressText : this.textFormatted}
          </text>
        </svg>
      </Host>
    );
  }
}
