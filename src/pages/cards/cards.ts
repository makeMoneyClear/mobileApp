import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { Event1Page } from '../events/lastDinner';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'cards',
  templateUrl: 'cards.html'
})
export class CardsPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }


  openPage(item){
    this.navCtrl.push(HomePage,{
      item:item
    })
  }

  openEvent(item){
    this.navCtrl.push(Event1Page,{
      item:item
    })
  }

  doPay(){
    let NotPaid = this.alertCtrl.create({
      title: 'Confirm to Make Payment Right Now?',
      buttons:[
        {
          text:'Yes',
          handler: () => {
            console.log('Finish clicked');
          }
        },

        {
          text:'No',
          handler: () => {
            console.log('Go back clicked');
          }
        }
      ]
    });
    NotPaid.present()
  }

  doPaid(){
    let Paid = this.alertCtrl.create({
      title: 'You Have Already Paid For This',
      buttons:[
        {
          text:'OK',
          handler: () => {
            console.log('Finish clicked');
          }
        },
      ]
    });
    Paid.present()
  }

}

