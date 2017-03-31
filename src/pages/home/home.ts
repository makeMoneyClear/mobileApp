import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public alertCtrl: AlertController) { }

  doConfirm(){
    let confirm = this.alertCtrl.create({
      title: 'Confirm the payment information?',
      message:'Ask for NAMES for MONEY in total for ISSUE',
      buttons:[
        {
          text:'Finish',
          handler: () => {
            console.log('Finish clicked');
          }
        },

        {
          text:'Go Back',
          handler: () => {
            console.log('Go back clicked');
          }
        }
      ]
    });
    confirm.present()
  }

}
