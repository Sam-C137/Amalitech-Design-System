import { Component, Host, Prop, h, Element } from '@stencil/core';

/**
 * @slot - The default slot for any content you like to be a docked utility item.
 */
@Component({
  tag: 'amalitech-docked-utility-item',
  styleUrl: 'amalitech-docked-utility-item.scss',
  shadow: true,
})
export class AmalitechDockedUtilityItem {
  @Element() el: HTMLAmalitechDockedUtilityItemElement;
  /**
   * The content attribute should match the name attribute placed on an `amalitech-docked-utility-body` element
   * to indicate that the body is associated with this item.
   */
  @Prop() content: string;

  private body: HTMLAmalitechDockedUtilityBodyElement;

  componentDidLoad() {
    if (Boolean(this.content)) {
      this.body = document.querySelector(`[name=${this.content}]`)!;
    }
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      this.el?.click();
    }
  };

  private handleClick = (e: Event) => {
    document.querySelectorAll('amalitech-docked-utility-body').forEach(item => {
      item.classList.remove('open');
    });
    document.querySelectorAll('amalitech-docked-utility-item').forEach(item => {
      item.classList.remove('active');
    });

    this.body.classList.toggle('open');
    this.el.classList.toggle('active');
    e.stopPropagation();
  };

  render() {
    return (
      <Host
        tabindex="0"
        onfocus={() => document.addEventListener('keydown', this.handleKeyDown)}
        onblur={() => document.removeEventListener('keydown', this.handleKeyDown)}
        onClick={this.handleClick}
        aria-controls={this.content}
      >
        <slot></slot>
      </Host>
    );
  }
}
