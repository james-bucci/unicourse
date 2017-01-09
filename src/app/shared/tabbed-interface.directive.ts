import { Directive, QueryList, ContentChildren } from '@angular/core';
import { TabSelectorDirective } from './tab-selector.directive';
import { TabContainerDirective } from './tab-container.directive';

@Directive({
  selector: '[appTabbedContainers]'
})
export class TabbedInterfaceDirective {

  @ContentChildren(TabContainerDirective) 
  tabContainers: QueryList<TabContainerDirective>;

  @ContentChildren(TabSelectorDirective) 
  tabSelectors: QueryList<TabSelectorDirective>;

  constructor() { }

  showTab (tabName: string) {
    console.log('showTab: ', tabName);
    this.tabContainers.forEach( t => t.active = (t.id === tabName ));
    this.tabSelectors.forEach( s => s.active = (s.id === tabName) );
  }
}
