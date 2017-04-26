import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { CardsPage } from '../pages/cards/cards';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { Event1Page } from '../pages/events/lastDinner';
import { BalancePage } from '../pages/balance/balance';
import { SettingPage } from '../pages/setting/setting';
import { User } from '../providers/user';
import { IntroPage } from '../pages/intro/intro';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AngularFireModule } from 'angularfire2';

// import { ResetPasswordPage } from '../pages/reset-password/reset-password';
import * as firebase from 'firebase';


export const firebaseConfig = {
    apiKey: "AIzaSyDvLRc0AQiy7eaIuiuojUHpXTwvOh0A1QA",
    authDomain: "makethemoneyclear.firebaseapp.com",
    databaseURL: "https://makethemoneyclear.firebaseio.com",
    projectId: "makethemoneyclear",
    storageBucket: "makethemoneyclear.appspot.com",
    messagingSenderId: "840233556621"

};

@NgModule({
  declarations: [
    MyApp,
    CardsPage,
    ContactPage,
    HomePage,
    TabsPage,
    Event1Page,
    BalancePage,
    SettingPage,
    IntroPage,
    LoginPage,
    SignupPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CardsPage,
    ContactPage,
    HomePage,
    TabsPage,
    Event1Page,
    BalancePage,
    SettingPage,
    IntroPage,
    LoginPage,
    SignupPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, User]
})
export class AppModule {}
