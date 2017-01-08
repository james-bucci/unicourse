import { Directive, Input, Output, EventEmitter, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[app-collapse-on-click]',
  exportAs: 'collapse-on-click'
})
export class CollapseOnClickDirective {

  @Input('collapsed')
  isCollapsed: boolean = false;

  @Output('changed') 
  collapsedChanged = new EventEmitter;

  @HostListener('click') 
  toggle() { 
    this.isCollapsed = !this.isCollapsed; 
    this.collapsedChanged.emit(this.isCollapsed);
  }

  @HostBinding("class.collapsed") 
  get collapsed() { 
    return this.isCollapsed; 
  }

  constructor() { }

}
