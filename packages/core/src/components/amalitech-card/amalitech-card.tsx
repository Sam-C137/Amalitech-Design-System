import { Component, Host, h, Prop } from '@stencil/core';
@Component({
  tag: 'amalitech-card',
  styleUrl: 'amalitech-card.scss',
  shadow: true,
})
export class AmalitechCard {
  /**
   * The disabled state of the card. If set to true, interactions would not be alowed,
   */
  @Prop() disabled: boolean = false;

  /**
   * The href attribute of the card. If set, the card would render as an anchor tag.
   */
  @Prop() href?: string;

  /**
   * The target attribute of the card. If href is set, the target defaults to _blank
   */
  @Prop() target: string;
  private clickable(): boolean {
    return this.href !== undefined;
  }
  /**
   * The hover animation state of the card. If set to true, the card would have a hover animation.
   */
  @Prop() withHoverAnimation: boolean = false;

  render() {
    const { href, target } = this;
    const TagChoose = this.clickable() ? 'a' : 'div';

    const attributes = TagChoose === 'a' ? { href, target } : {};

    return (
      <Host
        class={{
          'is-disabled': this.disabled,
          'with-hover-animation': this.withHoverAnimation,
        }}
        tabIndex={TagChoose === 'a' && !this.disabled ? 0 : -1}
      >           
        <TagChoose
          class={{
            'is-card': true,
          }}
          {...attributes}
        >
          <slot name="header"></slot>
          <slot name="title"></slot>
          <slot name="body"></slot>
          <slot name="image"></slot>
          <slot></slot>
        </TagChoose>
      </Host>
    );
  }
}
