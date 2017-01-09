import { Directive, Input, HostBinding } from '@angular/core';
import { TabSelectorDirective } from './tab-selector.directive';

@Directive({
  selector: '[appTabContainer]'
})
export class TabContainerDirective {

  @Input('appTabContainer') id: string;
  @Input('active') active: boolean;

  @HostBinding('hidden')
  get hidden() { return !this.active; }

  constructor () {}
}
