import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'amalitech-breadcrumb',
  styleUrl: 'amalitech-breadcrumb.scss',
  shadow: true,
})
export class AmalitechBreadcrumb {
  /**
   * Alignment of the breadcrumb items.
   */
  @Prop() align: 'left' | 'right' | 'center';

  /**
   * Size of the breadcrumb items.
   */
  @Prop({ reflect: true }) size: 'small' | 'medium' | 'large';

  /**
   * Separator between the breadcrumb items.
   */
  @Prop() separator: 'dot' | 'arrow' | 'slash';

  render() {
    const { align, size, separator } = this;

    return (
      <Host
        role="navigation"
        aria-label="Breadcrumb"
        class={{
          [`is-breadcrumb`]: true,
          [`has-separator-${separator}`]: separator !== undefined,
          [`is-${align}`]: align !== undefined,
          [`is-${size}`]: size !== undefined,
        }}
      >
        <slot></slot>
      </Host>
    );
  }
}
