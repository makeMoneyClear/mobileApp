import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { Event1Page } from '../events/lastDinner';
import { NavController, ModalController, Events } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { BalancePage } from '../balance/balance';
import { SettingPage } from '../setting/setting';
import { User } from '../../providers/user';

@Component({
  selector: 'cards',
  templateUrl: 'cards.html'
})
export class CardsPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public modalCtrl: ModalController, public userService: User, public events: Events) {

  }

  ionViewDidLoad(){
    this.events.subscribe('recipe:added', (data)=>{
      console.log(data);
    });
  }

  launchBalancePage(){

    // console.log(this.userService.username);

    let modal = this.modalCtrl.create(BalancePage);

    // modal.onDidDismiss((data)=>{
    //   console.log(data);
    // })

    modal.present();

    // let data = {
    //   title:'fjeiw',
    //   infew:[
    //       'ha',
    //     'qwfw'
    //   ],
    //   time: 'dieo'
    // };


    // this.navCtrl.push(BalancePage,data);
  }

  launchSettingPage(){
    this.navCtrl.push(SettingPage);
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

