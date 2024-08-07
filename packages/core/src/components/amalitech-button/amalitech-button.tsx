import { Component, h, Prop, Host, Element } from '@stencil/core';
import { Colors } from '../../global/types';

/**
 * The Button component is a wrapper for the native button element with custom styling and variations.
 *
 * @slot - The default slot for button content, text + icon or text only.
 */
@Component({
  tag: 'amalitech-button',
  styleUrl: './amalitech-button.scss',
  shadow: true,
})
export class AmalitechButton {
  @Element() el: HTMLAmalitechButtonElement;
  /**
   * The color of the button, default is 'default'
   */
  @Prop({ reflect: true }) variant: Colors = 'default';
  /**
   * The type attribute of the button
   */
  @Prop({ reflect: true }) type: 'button' | 'reset' | 'submit' = 'button';
  /**
   * The disabled state of the button. If set to true, interactions would not be alowed,
   * color will also change
   */
  @Prop({ reflect: true }) disabled = false;
  /**
   * Position of an icon in the button, default set to right
   */
  @Prop({ reflect: true }) iconPosition: 'left' | 'right' = 'right';
  /**
   * Size of the button
   */
  @Prop({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';
  /**
   * The tabindex of the inner button element
   */
  @Prop() innerTabIndex = 0;
  /**
   * (optional) Any aria label
   */
  @Prop() innerAriaLabel = 'Button label';
  /**
   * (optional) Any value of the button element
   */
  @Prop() value?: string;
  /**
   * (optional) Any name of the button element
   */
  @Prop() name?: string;

  private buttonElement: HTMLButtonElement | null | undefined = null;

  componentDidLoad() {
    this.buttonElement = this.el.shadowRoot?.querySelector('button');
    this.buttonElement?.addEventListener('click', this.handleClick);
  }

  private handleClick = () => {
    if (this.type === 'submit') {
      this.el.closest('form')?.submit();
    }
  };

  render() {
    const { type, disabled, variant, iconPosition, size } = this;
    return (
      <Host>
        <button
          onFocus={() => {
            window.onkeydown = e => {
              if (e.key === 'Enter') {
                this.el?.click();
              }
            };
          }}
          class={`${variant} ${size} icon-${iconPosition}`}
          type={type}
          disabled={disabled}
          role="button"
          aria-disabled={this.disabled ? 'true' : null}
          tabIndex={this.innerTabIndex}
          aria-label={this.innerAriaLabel}
          value={this.value}
          name={this.name}
        >
          <slot></slot>
        </button>
      </Host>
    );
  }
}
