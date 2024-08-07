import { Component, ComponentInterface, Element, h, Listen, Method, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'amalitech-tree',
  styleUrl: 'amalitech-tree.scss',
  shadow: true,
})
export class AmalitechTree implements ComponentInterface {
  @Element() elm!: HTMLAmalitechTreeElement;

  /**
   * Checks for empty state
   */
  @State() empty: boolean = false;

  /**
   * To be shown when no node is rendered
   */
  @Prop() emptyState: string = `{
    "headline": "No items",
    "description": "There are no items to display"
  }`;

  /**
   * selects a node at default
   */
  @Prop({ mutable: true }) selectedNode: string;

  @State() internalEmptyState: any;

  @Watch('emptyState')
  parseEmptyState() {
    if (typeof this.emptyState === 'string') {
      this.internalEmptyState = JSON.parse(this.emptyState);
    } else {
      this.internalEmptyState = this.emptyState;
    }
  }

  @Listen('tree:tree-node-click')
  treeNodeClick(evt: any) {
    this.selectedNode = evt.detail.id;
    this.subscribers.forEach(cb => cb(evt.detail.value));
  }

  private subscribers: any[] = [];

  /**
   * Returns selected node
   */
  @Method()
  async getSelectedNode() {
    return this.selectedNode;
  }

  /**
   * 
   * @param cb
   */
  @Method()
  async subscribeToSelect(cb: any) {
    this.subscribers.push(cb);
  }

  @Listen('keydown', { target: 'window' })
  handleKeyDown(evt: KeyboardEvent) {
    const path = evt.composedPath();
    let menuItem = null;
    for (const elm of path) {
      // @ts-ignore
      if (elm.tagName === 'AMALITECH-TREE-NODE') {
        menuItem = elm;
      }
      if (elm !== this.elm) continue;
      if (evt.key === 'ArrowDown') {
        evt.preventDefault();
        this.focusNextItem(menuItem);
      } else if (evt.key === 'ArrowUp') {
        evt.preventDefault();
        this.focusPreviousItem(menuItem);
      }
    }
  }

  /**
   * Sets focus on first menu item. Use this method instead of the global
   * `element.focus()`.
   */
  @Method()
  async setFocus() {
    const firstMenuItem = this.getFirstItem();
    firstMenuItem?.setFocus();
  }

  private getFirstItem() {
    return this.elm.querySelector('amalitech-tree-node');
  }

  private focusNextItem(currentItem: any) {
    let nextItem: any = currentItem.nextElementSibling;
    do {
      if (nextItem && nextItem.tagName === 'AMALITECH-TREE-NODE' && !nextItem.disabled) {
        nextItem.setFocus();
        return;
      }
      if (!nextItem) {
        nextItem = this.elm.querySelector('amalitech-tree-node:first-child');
      } else {
        nextItem = nextItem.nextElementSibling;
      }
    } while (nextItem !== currentItem);
  }

  private focusPreviousItem(currentItem: any) {
    let previousItem: any = currentItem.previousElementSibling;
    do {
      if (previousItem && previousItem.tagName === 'AMALITECH-TREE-NODE' && !previousItem.disabled) {
        previousItem.setFocus();
        return;
      }
      if (!previousItem) {
        previousItem = this.elm.querySelector('amalitech-tree-node:last-child');
      } else {
        previousItem = previousItem.previousElementSibling;
      }
    } while (previousItem !== currentItem);
  }

  componentWillLoad() {
    this.parseEmptyState();
  }

  render() {
    if (this.empty) {
      return <div class="tree-view">{this.renderEmptyState()}</div>;
    } else
      return (
        <div class="tree-view">
          <slot></slot>
        </div>
      );
  }

  private renderEmptyState() {
    if (this.empty) return <p>Please add tree items</p>;
  }
}
