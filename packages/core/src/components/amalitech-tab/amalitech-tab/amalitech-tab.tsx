import { Component, Host, h, Element, State, Prop, Watch } from '@stencil/core';
import { watchForOptions } from '../../../utils/watch-options';

@Component({
  tag: 'amalitech-tab',
  styleUrl: 'amalitech-tab.scss',
  shadow: true,
})
export class AmalitechTab {
  private didInit: boolean = false;
  private mutationO?: MutationObserver;

  @State() tabPanels: NodeListOf<any>;
  @State() tabs: any[];
  @State() _activeIndex: number;

  @Element() private element: HTMLAmalitechTabElement;

  /**
   * Index of the active tab to change selected tab programmatically.
   */
  @Prop({ mutable: true }) activeIndex: number = 0;

  /**
   * Inline style of the component.
   */
  @Prop() anyStyle: any = null;

  /**
   * Style class of the component.
   */
  @Prop() styleClass: any = null;

  @Watch('activeIndex')
  activeIndexChanged(newValue: number) {
    if (this.didInit && this.mutationO) {
      this._activeIndex = newValue;

      // eslint-disable-next-line
      if (this.tabs && this.tabs.length && this._activeIndex != null && this.tabs.length > this._activeIndex) {
        this.findSelectedTab().selected = false;
        this.tabs[this._activeIndex].selected = true;
      }
    }
  }

  componentWillLoad() {
    this.initTabs();
    this.activeIndexChanged(this.activeIndex);
  }

  componentDidLoad() {
    this.didInit = true;
  }

  async connectedCallback() {
    this.mutationO = watchForOptions(this.element, 'li', async () => {});
  }

  disconnectedCallback() {
    if (this.mutationO) {
      this.mutationO.disconnect();
      this.mutationO = undefined;
    }
  }

  private initTabs(): void {
    this.tabPanels = this.element.querySelectorAll('amalitech-tab-panel');
    this.tabs = Array.from(this.tabPanels);
    let selectedTab: any = this.findSelectedTab();

    if (selectedTab && this.tabs.length) {
      if (this.activeIndex != null && this.tabs.length > this.activeIndex) this.tabs[this.activeIndex].selected = true;
      else this.tabs[0].selected = true;
    }
  }

  private findSelectedTab() {
    for (let i = 0; i < this.tabs.length; i++) {
      if (this.tabs[i].selected) {
        return this.tabs[i];
      }
    }
    return null;
  }

  private open(event: Event, tab: any, index: number) {
    if (tab.disabled) {
      if (event) {
        event.preventDefault();
      }
      return;
    }

    if (!tab.selected) {
      let selectedTab: any = this.findSelectedTab();
      if (selectedTab) {
        selectedTab.selected = false;
      }

      tab.selected = true;
      this._activeIndex = index;
      this.activeIndex = index;
    }

    event.preventDefault();
  }

  render() {
    return (
      <Host>
        <div class="amalitech-element">
          <div
            class={'amalitech-tab amalitech-component' + (this.styleClass ? ' ' + this.styleClass : '')}
            style={this.anyStyle}
          >
            <div class="amalitech-tab-nav-container">
              <div class="amalitech-tab-nav-content">
                <ul class="amalitech-tab-nav" role="tablist">
                  {this.tabs.map((tab: any, index: number) => (
                    <li role="presentation" class={(tab.selected ? 'amalitech-highlight' : '') + (tab.disabled ? ' amalitech-disabled' : '')}>
                      <a
                        role="tab"
                        class="amalitech-tab-nav-link"
                        onClick={(e: Event) => this.open(e, tab, index)}
                        onKeyDown={(e: KeyboardEvent) => {
                          if (e.key === 'Enter') this.open(e, tab, index);
                        }}
                        tabindex={tab.disabled ? undefined : 0}
                      >
                        <span class="amalitech-tab-title">{tab.tabName}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div class="amalitech-tab-panels">
              <slot></slot>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
