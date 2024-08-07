import { Component, Host, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'amalitech-breadcrumb-item',
  styleUrl: 'amalitech-breadcrumb-item.scss',
  shadow: true,
})
export class AmalitechBreadcrumbItem {
  @Element() el: HTMLAmalitechBreadcrumbItemElement;

  /**
   * The URL to navigate to when the breadcrumb item is clicked.
   */
  @Prop() href: string | undefined;

  /**
   * The target of the breadcrumb item link. Only applies when an `href` is provided.
   */
  @Prop() target: string | undefined;

  /**
   * Indicates whether the breadcrumb item is the current page's item.
   */
  @Prop() active: boolean = false;

  render() {
    const { href, target, active } = this;
    const TagChose = href === undefined ? 'div' : ('a' as any);
    const attributes =
      TagChose === 'button'
        ? {}
        : {
            href,
            target,
          };
    let isLastItem;
    if (this.el.nextElementSibling === null) {
      isLastItem = true;
    } else {
      isLastItem = false;
    }
    const isLinkDisabled = isLastItem && href !== undefined;

    return (
      <Host
        role="link"
        class={{
          [`item`]: true,
        }}
      >
        <TagChose
          {...attributes}
          class={{
            [`is-active`]: active,
            'disable-click': isLinkDisabled,
          }}
          aria-current={active ? 'page' : undefined}
          tabIndex={isLinkDisabled ? -1 : 0}
        >
          <slot></slot>
        </TagChose>
      </Host>
    );
  }
}
