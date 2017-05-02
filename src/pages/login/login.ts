import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { HomePage } from '../home/home';
import { SettingPage } from '../setting/setting';
import { ContactPage } from '../contact/contact';
import { CardsPage } from '../cards/cards';
import { TabsPage } from '../tabs/tabs';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // public emailField:any;
  // public passwordField: any;


  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  
  toSignUp(){
    this.navCtrl.push(SignupPage);
  }

  toHomePage(){
    this.navCtrl.push(HomePage);
  }

  toSettingPage() {
    this.navCtrl.push(SettingPage);
  }

  toContactPage() {
    this.navCtrl.push(ContactPage);
  }

  toCardsPage() {
    this.navCtrl.push(CardsPage);
  }
  toTabsPage() {
    this.navCtrl.push(TabsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
