import { Directive, HostListener, HostBinding, Input, Output, EventEmitter, Inject, forwardRef } from '@angular/core';
import { TabbedInterfaceDirective } from './tabbed-interface.directive';

@Directive({
  selector: '[appTabSelector]'
})
export class TabSelectorDirective {

  @Input('appTabSelector') id: string;
  @Input('active') active: boolean;

  constructor( @Inject(forwardRef(() => TabbedInterfaceDirective)) private tabbedInterface ) {}

  @HostListener('click') 
  selectTab () { this.tabbedInterface.showTab(this.id) }

  @HostBinding('style.color') 
  get textColor() { return this.active ? 'white' : 'red' }

}
