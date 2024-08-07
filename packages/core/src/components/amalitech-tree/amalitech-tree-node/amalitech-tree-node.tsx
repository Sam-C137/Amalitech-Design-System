import { Component, Element, Event, EventEmitter, h, Host, Listen, Method, Prop, State } from '@stencil/core';
import { getComponentIndex } from '../utils';

@Component({
  tag: 'amalitech-tree-node',
  styleUrl: 'amalitech-tree-node.scss',
  shadow: true,
})
export class AmalitechTreeNode {
  private gid: string = getComponentIndex();

  private nativeElement?: HTMLElement;

  private tabindex?: string | number = 1;

  /**
   * The menu item value.
   */
  @Prop() value?: string | number | null;

  /**
   * label
   */
  @Prop() label: string = '';

  /**
   * Hyperlink to navigate to on click.
   */
  @Prop() href: string;

  /**
   * If true, the user cannot interact with the button. Defaults to `false`.
   */
  @Prop({ reflect: true }) disabled: boolean = false;

  /**
   * Menu item selection state.
   */
  @Prop({ reflect: true, mutable: true }) selectedNode: string;

  /**
   * reflects the expanded state
   */
  @Prop({ reflect: true, mutable: true }) expanded: boolean = false;

  /**
   *
   */
  @Prop({ reflect: true }) level: number = 0;

  /**
   * Emitted when the menu item is clicked.
   */
  @Event({ eventName: 'tree:tree-node-click' }) treeNodeClick: EventEmitter;

  @State() hasChildNodes = false;

  /**
   * Sets focus on the native `input`. Use this method instead of the global
   * `input.focus()`.
   */
  @Method()
  async setFocus() {
    if (this.nativeElement) {
      this.nativeElement.focus();
    }
  }

  /**
   * Sets blur on the native `input`. Use this method instead of the global
   * `input.blur()`.
   */
  @Method()
  async setBlur() {
    if (this.nativeElement) {
      this.nativeElement.blur();
    }
  }

  @Listen('mouseup', { target: 'window' })
  windowMouseUp() {
    if (this.isActive) this.isActive = false;
  }

  @Listen('keyup', { target: 'window' })
  windowKeyUp(evt: any) {
    if (this.isActive && evt.key == ' ') this.isActive = false;
  }

  @State() hasFocus = false;
  @State() isActive = false;
  @Element() elm!: HTMLAmalitechTreeNodeElement;

  private clickHandler = (event: Event) => {
    if (!this.disabled) {
      this.expanded = !this.expanded;
      this.treeNodeClick.emit({
        value: this.value || this.label,
        expand: this.expanded,
        id: this.gid,
      });
    } else {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
  };

  private blurHandler = () => {
    this.hasFocus = false;
  };

  private focusHandler = () => {
    this.hasFocus = true;
  };

  private mouseDownHandler = () => {
    this.isActive = true;
  };

  private isSelected() {
    if (this.value === undefined && this.label === undefined) return false;
    else if (this.value === undefined) return this.selectedNode === this.label;
    else return this.selectedNode === this.value;
  }

  private keyDownHandler = (evt: any) => {
    if (evt.key == ' ' || evt.key == 'Enter') {
      evt.preventDefault();
      this.isActive = true;
      this.clickHandler(evt);
    } else if (evt.key === 'ArrowLeft') {
      evt.preventDefault();
      this.expanded = false;
    } else if (evt.key === 'ArrowRight') {
      evt.preventDefault();
      if (this.expanded && this.hasChildNodes) {
        const childNodes = this.elm.querySelectorAll('amalitech-tree-node');
        if (childNodes.length) {
          const firstChild = childNodes[0] as any;
          firstChild.setFocus();
        }
      } else {
        this.expanded = true;
      }
    }
  };

  componentWillLoad() {
    // If the ion-input has a tabindex attribute we get the value
    // and pass it down to the native input, then remove it from the
    // input to avoid causing tabbing twice on the same element
    if (this.elm.hasAttribute('tabindex')) {
      const tabindex = this.elm.getAttribute('tabindex');
      this.tabindex = tabindex !== null ? tabindex : undefined;
      this.elm.removeAttribute('tabindex');
    }

    const treeView = this.elm.closest('amalitech-tree');

    // @ts-ignore
    treeView.getSelectedNode().then((selectedNode: string) => {
      this.selectedNode = selectedNode;
    });

    // @ts-ignore
    treeView.subscribeToSelect((selectedNode: string) => {
      this.selectedNode = selectedNode;
    });

    const childNodes = this.elm.querySelectorAll('amalitech-tree-node');
    this.hasChildNodes = !!childNodes.length;
    childNodes.forEach((node: any) => {
      node.level = this.level + 1;
    });
  }

  render() {
    return (
      <Host active={this.isActive} has-focus={this.hasFocus}>
        <div class="tree-node">
          <a class="link" href={this.href}>
            <div
              class={{
                'tree-node-content': true,
                'selected': this.isSelected(),
                'active': this.isActive,
                'disabled': this.disabled,
                'has-focus': this.hasFocus,
              }}
              style={{ paddingInlineStart: `calc(${this.level + 1}rem - 0.125rem)` }}
              onClick={this.clickHandler}
              onMouseDown={this.mouseDownHandler}
              onKeyDown={this.keyDownHandler}
              aria-disabled={this.disabled}
              onBlur={this.blurHandler}
              onFocus={this.focusHandler}
              tabindex={this.tabindex}
              ref={el => (this.nativeElement = el as HTMLElement)}
            >
              {this.hasChildNodes && (
                <svg class={{ 'mr-2 expand-icon': true, 'expanded': this.expanded }} xmlns="http://www.w3.org/2000/svg" width="12" height="13" viewBox="0 0 52 52" xmlSpace="preserve">
                  <path d="M14 43.7V8.3c0-1 1.3-1.7 2.2-.9l21.2 17.3c.8.6.8 1.9 0 2.5L16.2 44.7c-.9.7-2.2.1-2.2-1" />
                </svg>
              )}

              {!this.hasChildNodes && <div class="icon-space" />}

              <span class="tree-node-label">{this.label}</span>
            </div>
          </a>

          <div
            class={{
              'node-slot': true,
              'expanded': this.expanded,
            }}
          >
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  };
}
