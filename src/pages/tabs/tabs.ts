import { Component } from '@angular/core';

import { CardsPage } from '../cards/cards';
import { ContactPage } from '../contact/contact';
import { IntroPage } from '../intro/intro';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = IntroPage;
  tab2Root: any = CardsPage;
  tab3Root: any = ContactPage;

  constructor() {

  }
}
