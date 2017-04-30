import { Component , NgZone } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { BalancePage } from '../balance/balance';
import { SettingPage } from '../setting/setting';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
import { UserService } from '../../providers/user-service';
import { LoginPage } from '../login/login';
// import { DetailPage } from '../pages/detail/detail';
import { DetailsPage } from '../details/details';
import {FileChooser, FilePath, File} from 'ionic-native';
import * as firebase from 'firebase';


@Component({
  selector: 'cards',
  templateUrl: 'cards.html',
  providers : [UserService]
})
export class CardsPage {
  public paymentList =[];
  public userName : any;

  firestore = firebase.storage();
  events: FirebaseListObservable<any>;
  imgsource: any;
  constructor(private userService: UserService,public navCtrl: NavController, public alertCtrl: AlertController, public modalCtrl: ModalController, angFire: AngularFire, public zone: NgZone) {
    this.events = angFire.database.list('/Events');
    this.showPayment();
    this.showUserName();
    

    // for (var n = 0; n < this.events.length; n++) {
    //   var average = this.events[n].price/this.events[n].number;
    //   this.events[n].ave = average.toFixed(2);
    // }
  }

  // ionViewDidLoad(){
  //   this.events.subscribe('recipe:added', (data)=>{
  //     console.log(data);
  //   });
  // }



  //  showPayment(){
  //     var that = this;
  //     this.userService.paymentEvent.once('value',function(snapshot){
  //     snapshot.forEach(function(childSnapshot){
  //       childSnapshot.forEach(function(childChildSnapshot){
  //         var keys = childChildSnapshot.key
  //         that.titleList.push(childChildSnapshot.val().title);
  //         that.amountList.push(childChildSnapshot.val().amount);
  //         that.shareToList.push(childChildSnapshot.val().shareTo);
  //         that.detailsList.push(childChildSnapshot.val().details);
  //         console.log(keys);
  //       })
  //     })
  //   })
  // }

  showUserName(){
     var that = this;
      this.userService.mUserName.child('userName').once('value',snapshot => {
        that.userName = snapshot.val();
         console.log(that.userName);
        })
  }

     showPayment(){
      var that = this;
      this.userService.paymentEvent.once('value',function(snapshot) {
        snapshot.forEach(function(childSnapshot){
          that.paymentList.push(childSnapshot.val());
          var keys = childSnapshot.key;
         console.log(that.paymentList);
         console.log(keys);
        })

    })
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


  openEvent(item){
    this.navCtrl.push(DetailsPage,{
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

  userLogOut(){
    this.userService.logOutUser();

    let logOut = this.alertCtrl.create({
      title: 'Current User Loged out',
      buttons:[
        {
          text:'OK',
          handler: () => {
            console.log('Finish clicked');
          }
        },
      ]
    });
    logOut.present()
    this.userService.logOutUser().then(()=>{
      this.navCtrl.setRoot(LoginPage);
    });
    



  }

  display(){
    this.firestore.ref().child('images').getDownloadURL().then((url)=>{
      this.zone.run(()=>{
        this.imgsource = url;
      })
    })
  }
}

