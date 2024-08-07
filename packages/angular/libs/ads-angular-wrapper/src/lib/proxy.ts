/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@amalitech-design-system/core';


@ProxyCmp({
  inputs: ['animated', 'description', 'label']
})
@Component({
  selector: 'amalitech-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animated', 'description', 'label'],
})
export class AmalitechAccordion {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['toggle']);
  }
}


export declare interface AmalitechAccordion extends Components.AmalitechAccordion {
  /**
   * Event emitted when the accordion is toggled.
   */
  toggle: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['name', 'position']
})
@Component({
  selector: 'amalitech-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['name', 'position'],
})
export class AmalitechAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AmalitechAlert extends Components.AmalitechAlert {}


@ProxyCmp({
  inputs: ['actionLabel', 'actionName', 'actionable', 'dismissible', 'highContrast', 'state']
})
@Component({
  selector: 'amalitech-alert-content',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['actionLabel', 'actionName', 'actionable', 'dismissible', 'highContrast', 'state'],
})
export class AmalitechAlertContent {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['alert:alert-content-dismiss']);
  }
}


export declare interface AmalitechAlertContent extends Components.AmalitechAlertContent {
  /**
   * dismiss alert event
   */
  'alert:alert-content-dismiss': EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['align', 'separator', 'size']
})
@Component({
  selector: 'amalitech-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['align', 'separator', 'size'],
})
export class AmalitechBreadcrumb {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AmalitechBreadcrumb extends Components.AmalitechBreadcrumb {}


@ProxyCmp({
  inputs: ['active', 'href', 'target']
})
@Component({
  selector: 'amalitech-breadcrumb-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'href', 'target'],
})
export class AmalitechBreadcrumbItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AmalitechBreadcrumbItem extends Components.AmalitechBreadcrumbItem {}


@ProxyCmp({
  inputs: ['disabled', 'iconPosition', 'innerAriaLabel', 'innerTabIndex', 'name', 'size', 'type', 'value', 'variant']
})
@Component({
  selector: 'amalitech-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'iconPosition', 'innerAriaLabel', 'innerTabIndex', 'name', 'size', 'type', 'value', 'variant'],
})
export class AmalitechButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AmalitechButton extends Components.AmalitechButton {}


@ProxyCmp({
  inputs: ['disabled', 'href', 'target', 'withHoverAnimation']
})
@Component({
  selector: 'amalitech-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'href', 'target', 'withHoverAnimation'],
})
export class AmalitechCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AmalitechCard extends Components.AmalitechCard {}


@ProxyCmp({
  inputs: ['anyStyle', 'anyTabIndex', 'binary', 'checkboxIcon', 'checked', 'disabled', 'inputId', 'label', 'labelStyleClass', 'name', 'readonly', 'styleClass', 'value'],
  methods: ['inputFocus']
})
@Component({
  selector: 'amalitech-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['anyStyle', 'anyTabIndex', 'binary', 'checkboxIcon', 'checked', 'disabled', 'inputId', 'label', 'labelStyleClass', 'name', 'readonly', 'styleClass', 'value'],
})
export class AmalitechCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange', 'aOnFocus', 'aOnBlur']);
  }
}


export declare interface AmalitechCheckbox extends Components.AmalitechCheckbox {
  /**
   * Callback to invoke when value of dropdown changes.
   */
  valueChange: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the toggle has focus.
   */
  aOnFocus: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the toggle loses focus.
   */
  aOnBlur: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['actions', 'columns', 'data', 'emptyStateDescription', 'emptyStateHeadline', 'headerAlignment', 'keyField', 'managed', 'page', 'pageSize', 'paginate', 'selectedRowKeys', 'selectionType', 'sortBy', 'sortOrder', 'sortable', 'totalItems']
})
@Component({
  selector: 'amalitech-data-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['actions', 'columns', 'data', 'emptyStateDescription', 'emptyStateHeadline', 'headerAlignment', 'keyField', 'managed', 'page', 'pageSize', 'paginate', 'selectedRowKeys', 'selectionType', 'sortBy', 'sortOrder', 'sortable', 'totalItems'],
})
export class AmalitechDataTable {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['table:table-cell-click', 'table:table-select-change', 'table:table-sort', 'table:table-page']);
  }
}


export declare interface AmalitechDataTable extends Components.AmalitechDataTable {
  /**
   * Emitted when a cell is clicked. @event table:table-cell-click,@property {Object} detail - The event detail.,@property {Object} detail.record - The clicked row.,@property {Object} detail.column - The clicked column.,@property {boolean} detail.altKey - Whether the Alt key was pressed during the click.,@property {boolean} detail.ctrlKey - Whether the Ctrl key was pressed during the click.,@property {boolean} detail.metaKey - Whether the Meta key was pressed during the click.,@property {boolean} detail.shiftKey - Whether the Shift key was pressed during the click.
   */
  'table:table-cell-click': EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the selection changes. @event table:table-select-change,@property {Object} detail - The event detail.,@property {string[]} detail.value - The keys of selected rows.,@property {boolean} detail.isSelectAll - Whether all rows are selected.
   */
  'table:table-select-change': EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when sorting is applied to the table. @event table:table-sort,@property {Object} detail - The event detail.,@property {string} detail.sortBy - The column name to sort by.,@property {'asc' | 'desc'} detail.sortOrder - The sorting order ('asc' or 'desc').
   */
  'table:table-sort': EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when pagination is changed. @event table:table-page,@property {Object} detail - The event detail.,@property {number} detail.page - The current page number.,@property {number} detail.pageSize - The number of items per page.
   */
  'table:table-page': EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['disabled', 'firstDayOfWeek', 'iconPosition', 'label', 'max', 'min', 'outputFormat', 'outputType', 'value'],
  methods: ['open', 'close']
})
@Component({
  selector: 'amalitech-date-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'firstDayOfWeek', 'iconPosition', 'label', 'max', 'min', 'outputFormat', 'outputType', 'value'],
})
export class AmalitechDatePicker {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['amalitechDateChange', 'amalitechDateClear']);
  }
}


export declare interface AmalitechDatePicker extends Components.AmalitechDatePicker {
  /**
   * The date change event that is emitted when the date changes
   */
  amalitechDateChange: EventEmitter<CustomEvent<string | Date>>;
  /**
   * The date clear event is emitted when the date selection is cleared
   */
  amalitechDateClear: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
})
@Component({
  selector: 'amalitech-docked-utility-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class AmalitechDockedUtilityBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AmalitechDockedUtilityBar extends Components.AmalitechDockedUtilityBar {}


@ProxyCmp({
  inputs: ['name']
})
@Component({
  selector: 'amalitech-docked-utility-body',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['name'],
})
export class AmalitechDockedUtilityBody {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AmalitechDockedUtilityBody extends Components.AmalitechDockedUtilityBody {}


@ProxyCmp({
  inputs: ['content']
})
@Component({
  selector: 'amalitech-docked-utility-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['content'],
})
export class AmalitechDockedUtilityItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AmalitechDockedUtilityItem extends Components.AmalitechDockedUtilityItem {}


@ProxyCmp({
  inputs: ['aTitle', 'anyAriaRequired', 'anyTabIndex', 'ariaDetailedId', 'autocomplete', 'autofocus', 'counter', 'disabled', 'floatLabel', 'helperText', 'inputClass', 'inputHolderClass', 'inputId', 'inputStyle', 'inputWrapperClass', 'label', 'leftIconClass', 'list', 'max', 'maxLength', 'min', 'minLength', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'styles', 'type', 'value'],
  methods: ['getInputRef']
})
@Component({
  selector: 'amalitech-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['aTitle', 'anyAriaRequired', 'anyTabIndex', 'ariaDetailedId', 'autocomplete', 'autofocus', 'counter', 'disabled', 'floatLabel', 'helperText', 'inputClass', 'inputHolderClass', 'inputId', 'inputStyle', 'inputWrapperClass', 'label', 'leftIconClass', 'list', 'max', 'maxLength', 'min', 'minLength', 'name', 'pattern', 'placeholder', 'readonly', 'required', 'size', 'styles', 'type', 'value'],
})
export class AmalitechInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


export declare interface AmalitechInput extends Components.AmalitechInput {
  /**
   * Callback to invoke when value of input text changes
   */
  valueChange: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['height', 'hideNearByList', 'iconUrl', 'latitude', 'longitude', 'name', 'width', 'zoom'],
  methods: ['addMarker']
})
@Component({
  selector: 'amalitech-map',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['height', 'hideNearByList', 'iconUrl', 'latitude', 'longitude', 'name', 'width', 'zoom'],
})
export class AmalitechMap {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AmalitechMap extends Components.AmalitechMap {}


@ProxyCmp({
  inputs: ['cancelText', 'closeButtonType', 'confirmText', 'confirmation', 'scrollable', 'visible'],
  methods: ['openModal', 'closeModal']
})
@Component({
  selector: 'amalitech-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['cancelText', 'closeButtonType', 'confirmText', 'confirmation', 'scrollable', 'visible'],
})
export class AmalitechModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['amalitechConfirm', 'amalitechCancel']);
  }
}


export declare interface AmalitechModal extends Components.AmalitechModal {
  /**
   * Event is emmited when a user clicks on confirm button
   */
  amalitechConfirm: EventEmitter<CustomEvent<void>>;
  /**
   * Event is emmitted when user clicks on cancel button or close button
   */
  amalitechCancel: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['active', 'disabled']
})
@Component({
  selector: 'amalitech-nav-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['active', 'disabled'],
})
export class AmalitechNavItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['switch']);
  }
}


export declare interface AmalitechNavItem extends Components.AmalitechNavItem {
  /**
   * Event emitted when the nav item is clicked
   */
  switch: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['align']
})
@Component({
  selector: 'amalitech-nav-mobile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['align'],
})
export class AmalitechNavMobile {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AmalitechNavMobile extends Components.AmalitechNavMobile {}


@ProxyCmp({
  inputs: ['layout', 'mobileIconAlign']
})
@Component({
  selector: 'amalitech-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['layout', 'mobileIconAlign'],
})
export class AmalitechNavbar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AmalitechNavbar extends Components.AmalitechNavbar {}


@ProxyCmp({
  inputs: ['limitNumber', 'pageNumber', 'siblings', 'size', 'totalItems', 'totalPagesCount']
})
@Component({
  selector: 'amalitech-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['limitNumber', 'pageNumber', 'siblings', 'size', 'totalItems', 'totalPagesCount'],
})
export class AmalitechPagination {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['amalitechPageChange']);
  }
}


export declare interface AmalitechPagination extends Components.AmalitechPagination {
  /**
   * This event is emmitted with the selected page number when the page changes
   */
  amalitechPageChange: EventEmitter<CustomEvent<number>>;
}


@ProxyCmp({
  inputs: ['currentValue', 'indeterminate', 'labeledBy', 'maxValue', 'minValue', 'steps', 'valueText']
})
@Component({
  selector: 'amalitech-progress',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['currentValue', 'indeterminate', 'labeledBy', 'maxValue', 'minValue', 'steps', 'valueText'],
})
export class AmalitechProgress {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AmalitechProgress extends Components.AmalitechProgress {}


@ProxyCmp({
  inputs: ['helperText', 'hideLabel', 'hideValue', 'indeterminate', 'label', 'maximumValue', 'minimumValue', 'size', 'status', 'value']
})
@Component({
  selector: 'amalitech-progress-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['helperText', 'hideLabel', 'hideValue', 'indeterminate', 'label', 'maximumValue', 'minimumValue', 'size', 'status', 'value'],
})
export class AmalitechProgressBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AmalitechProgressBar extends Components.AmalitechProgressBar {}


@ProxyCmp({
  inputs: ['indeterminate', 'outlineColor', 'progress', 'progressColor', 'progressText', 'radius', 'stroke']
})
@Component({
  selector: 'amalitech-progress-ring',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['indeterminate', 'outlineColor', 'progress', 'progressColor', 'progressText', 'radius', 'stroke'],
})
export class AmalitechProgressRing {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AmalitechProgressRing extends Components.AmalitechProgressRing {}


@ProxyCmp({
  inputs: ['anyStyle', 'anyTabIndex', 'disabled', 'doubleBorder', 'inputId', 'label', 'labelStyleClass', 'name', 'styleClass', 'value'],
  methods: ['setFocus']
})
@Component({
  selector: 'amalitech-radio-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['anyStyle', 'anyTabIndex', 'disabled', 'doubleBorder', 'inputId', 'label', 'labelStyleClass', 'name', 'styleClass', 'value'],
})
export class AmalitechRadioButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['aOnSelect', 'aOnFocus', 'aOnBlur']);
  }
}


export declare interface AmalitechRadioButton extends Components.AmalitechRadioButton {
  /**
   * Callback to invoke on radio button select.
   */
  aOnSelect: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when the radio button receives focus.
   */
  aOnFocus: EventEmitter<CustomEvent<any>>;
  /**
   * Callback to invoke when the radio button loses focus.
   */
  aOnBlur: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['name', 'value']
})
@Component({
  selector: 'amalitech-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['name', 'value'],
})
export class AmalitechRadioGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['valueChange']);
  }
}


import type { RadioGroupChangeEventDetail as IAmalitechRadioGroupRadioGroupChangeEventDetail } from '@amalitech-design-system/core';

export declare interface AmalitechRadioGroup extends Components.AmalitechRadioGroup {
  /**
   * Emitted when the value has changed.
   */
  valueChange: EventEmitter<CustomEvent<IAmalitechRadioGroupRadioGroupChangeEventDetail>>;
}


@ProxyCmp({
  inputs: ['disabled', 'label', 'multiple', 'open', 'required', 'scrollable', 'selectedStyle'],
  methods: ['clear']
})
@Component({
  selector: 'amalitech-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'label', 'multiple', 'open', 'required', 'scrollable', 'selectedStyle'],
})
export class AmalitechSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['amalitechChange']);
  }
}


export declare interface AmalitechSelect extends Components.AmalitechSelect {
  /**
   * This event emmits the value of the selected option or an array of values if option is multiple
   */
  amalitechChange: EventEmitter<CustomEvent<Record<string, string | string[]>>>;
}


@ProxyCmp({
  inputs: ['disabled', 'label', 'open', 'required', 'scrollable', 'state']
})
@Component({
  selector: 'amalitech-select-multiple',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'label', 'open', 'required', 'scrollable', 'state'],
})
export class AmalitechSelectMultiple {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['multiDeselection']);
  }
}


export declare interface AmalitechSelectMultiple extends Components.AmalitechSelectMultiple {
  /**
   * This event is triggered when a selection is removed
   */
  multiDeselection: EventEmitter<CustomEvent<{ value: string; textContent: string; }>>;
}


@ProxyCmp({
  inputs: ['disabled', 'selected', 'selectedStyle', 'value'],
  methods: ['clear']
})
@Component({
  selector: 'amalitech-select-option',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'selected', 'selectedStyle', 'value'],
})
export class AmalitechSelectOption {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['selection', 'deselection', 'clearEvent']);
  }
}


export declare interface AmalitechSelectOption extends Components.AmalitechSelectOption {
  /**
   * This event is triggered when a selection is made
   */
  selection: EventEmitter<CustomEvent<{ value: string; textContent: string; }>>;
  /**
   * This event is triggered when a selection is removed
   */
  deselection: EventEmitter<CustomEvent<{ value: string; textContent: string; }>>;

  clearEvent: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['disabled', 'label', 'open', 'required', 'scrollable', 'state']
})
@Component({
  selector: 'amalitech-select-single',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'label', 'open', 'required', 'scrollable', 'state'],
})
export class AmalitechSelectSingle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AmalitechSelectSingle extends Components.AmalitechSelectSingle {}


@ProxyCmp({
  inputs: ['autoClose', 'callToActionText', 'closeSecs', 'closeable', 'href', 'rounded', 'snackbarText', 'target']
})
@Component({
  selector: 'amalitech-snackbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoClose', 'callToActionText', 'closeSecs', 'closeable', 'href', 'rounded', 'snackbarText', 'target'],
})
export class AmalitechSnackbar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['closed']);
  }
}


export declare interface AmalitechSnackbar extends Components.AmalitechSnackbar {
  /**
   * This event is emitted when the close button is clicked
   */
  closed: EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['animated', 'count', 'disabled', 'hoverDisabled', 'readonly', 'size', 'strokeColor', 'value']
})
@Component({
  selector: 'amalitech-star-rating',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animated', 'count', 'disabled', 'hoverDisabled', 'readonly', 'size', 'strokeColor', 'value'],
})
export class AmalitechStarRating {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['amalitechRatingChange']);
  }
}


export declare interface AmalitechStarRating extends Components.AmalitechStarRating {
  /**
   * The event emmitted when the star rating is changed or a selection is made
   */
  amalitechRatingChange: EventEmitter<CustomEvent<number>>;
}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'name', 'size', 'switchId', 'value']
})
@Component({
  selector: 'amalitech-switch',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'name', 'size', 'switchId', 'value'],
})
export class AmalitechSwitch {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['amalitechSwitchChange']);
  }
}


export declare interface AmalitechSwitch extends Components.AmalitechSwitch {
  /**
   * The event that is emitted when the component is clicked
   */
  amalitechSwitchChange: EventEmitter<CustomEvent<Record<string, string | boolean>>>;
}


@ProxyCmp({
  inputs: ['activeIndex', 'anyStyle', 'styleClass']
})
@Component({
  selector: 'amalitech-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activeIndex', 'anyStyle', 'styleClass'],
})
export class AmalitechTab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AmalitechTab extends Components.AmalitechTab {}


@ProxyCmp({
  inputs: ['disabled', 'selected', 'tabName']
})
@Component({
  selector: 'amalitech-tab-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'selected', 'tabName'],
})
export class AmalitechTabPanel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AmalitechTabPanel extends Components.AmalitechTabPanel {}


@ProxyCmp({
  inputs: ['label', 'max', 'meridian', 'min', 'outputFormat', 'required', 'seconds', 'size', 'value'],
  methods: ['open', 'close']
})
@Component({
  selector: 'amalitech-time-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', 'max', 'meridian', 'min', 'outputFormat', 'required', 'seconds', 'size', 'value'],
})
export class AmalitechTimePicker {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['amalitechTimeChange', 'amalitechTimeClear']);
  }
}


export declare interface AmalitechTimePicker extends Components.AmalitechTimePicker {
  /**
   * This event emmits the value of the selected time in the format {time: '00:00 AM', hour: '00', minute: '00', meridian: 'AM'}
   */
  amalitechTimeChange: EventEmitter<CustomEvent<Partial<Record<'time' | 'hour' | 'minute' | 'meridian' | 'second', string>> | Date>>;
  /**
   * This event is emitted when the time picker value is cleared
   */
  amalitechTimeClear: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['emptyState', 'selectedNode'],
  methods: ['getSelectedNode', 'subscribeToSelect', 'setFocus']
})
@Component({
  selector: 'amalitech-tree',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['emptyState', 'selectedNode'],
})
export class AmalitechTree {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface AmalitechTree extends Components.AmalitechTree {}


@ProxyCmp({
  inputs: ['disabled', 'expanded', 'href', 'label', 'level', 'selectedNode', 'value'],
  methods: ['setFocus', 'setBlur']
})
@Component({
  selector: 'amalitech-tree-node',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'expanded', 'href', 'label', 'level', 'selectedNode', 'value'],
})
export class AmalitechTreeNode {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['tree:tree-node-click']);
  }
}


export declare interface AmalitechTreeNode extends Components.AmalitechTreeNode {
  /**
   * Emitted when the menu item is clicked.
   */
  'tree:tree-node-click': EventEmitter<CustomEvent<any>>;
}


@ProxyCmp({
  inputs: ['autoClose', 'closeButtonType', 'closeSecs', 'transition', 'variant']
})
@Component({
  selector: 'amalitech-validation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autoClose', 'closeButtonType', 'closeSecs', 'transition', 'variant'],
})
export class AmalitechValidation {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['amalitechClose']);
  }
}


export declare interface AmalitechValidation extends Components.AmalitechValidation {
  /**
   * This event is emmitted when the close button is clicked
   */
  amalitechClose: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['align', 'disabled', 'selectVariant', 'uncoverable']
})
@Component({
  selector: 'amalitech-visual-picker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['align', 'disabled', 'selectVariant', 'uncoverable'],
})
export class AmalitechVisualPicker {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['pickerChange']);
  }
}


export declare interface AmalitechVisualPicker extends Components.AmalitechVisualPicker {
  /**
   * This event is emitted when the selected items change
   */
  pickerChange: EventEmitter<CustomEvent<{ value: string | string[]; }>>;
}


@ProxyCmp({
  inputs: ['disabled', 'label', 'selectVariant', 'selected', 'uncoverable', 'value']
})
@Component({
  selector: 'amalitech-visual-picker-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'label', 'selectVariant', 'selected', 'uncoverable', 'value'],
})
export class AmalitechVisualPickerItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['selection']);
  }
}


export declare interface AmalitechVisualPickerItem extends Components.AmalitechVisualPickerItem {
  /**
   * This event is emitted when the item is selected
   */
  selection: EventEmitter<CustomEvent<Record<string, boolean>>>;
}


