import { Component, Host, h, Prop, EventEmitter, Event, State } from '@stencil/core';
import { AccordionIcons } from '../../utils/svg-icons';

@Component({
  tag: 'amalitech-accordion',
  styleUrl: 'amalitech-accordion.scss',
  shadow: true,
})
export class AmalitechAccordion {
  /**
   * Indicates whether the accordion is currently expanded or not.
   */
  @State() change: boolean = false;

  /**
   * Event emitted when the accordion is toggled.
   */
  @Event() toggle: EventEmitter;

  /**
   * The label for the accordion button.
   */
  @Prop() label: string = 'Label';

  /**
   * The description or content to be displayed when the accordion is expanded.
   */
  @Prop() description: string = 'Content';
  /**
   * Indicates whether the accordion is animated or not.
   */
  @Prop() animated: boolean = false;

  /**
   * Toggles the visibility of the accordion content.
   */
  private toggleComponent() {
    this.change = !this.change;
    this.toggle.emit({ visible: this.change });
  }

  render() {
    return (
      <Host>
        <button
          class="accordion"
          onClick={() => this.toggleComponent()}
          role="button"
          aria-expanded={this.change}
          tabIndex={0}
        >
          {this.label}
          {!this.animated && this.change ? <span>{AccordionIcons.collapseIcon()}</span> : !this.animated && !this.change ? <span>{AccordionIcons.expandIcon()}</span> : null}
          {this.animated && (
            <span
              class={{
                [`icon-${this.change ? 'collapse' : 'expand'}`]: true,
              }}
            >
              {AccordionIcons.expandIcon()}
            </span>
          )}
        </button>
        <div class={{
          [`content-box`]: true,
          [`open`]: this.change,
          [`close`]: !this.change
        }}>
          <p>{this.description}</p>
        </div>
      </Host>
    );
  }
}
