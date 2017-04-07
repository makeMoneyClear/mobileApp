import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, Events } from 'ionic-angular';

/*
  Generated class for the Balance page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-balance',
  templateUrl: 'balance.html'
})
export class BalancePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public events:Events) {}

  ionViewDidLoad() {
    console.log (this.navParams.get('title'));
  }

  addRecipe(){
    let data = {
      title: 'hello',
      message: 'HOW ARE YOU?'
    };

    this.events.publish('recipe: added', data);
  }

  closeModal(){
    let data = {
      title: 'hello',
      message: 'HOW ARE YOU?'
    };
    this.viewCtrl.dismiss(data);
  }


}
