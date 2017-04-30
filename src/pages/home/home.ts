import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { UserService } from '../../providers/user-service';
// import { AngularFire,FirebaseListObservable} from'angularfire2';
// <<<<<<< HEAD
// =======
import * as firebase from 'firebase';




@Component({
  selector:'page-home',
  templateUrl: 'home.html',
  providers : [UserService]
})
export class HomePage {
  public base64Image: string;

  public title: any;
  public amount:any;
  public shareTo:any
  public details : any;
  public picture : any;


  // static get paramaters(){
  //   return [NgZone];
  // }

  // constructor(ngzone){
  //   this.ngzone = ngzone;
  // }

  // constructor(public navCtrl: NavController, public  alertCtrl: AlertController, public angFire:AngularFire) { 
    // this.payment = angFire.database.list('/Payment');

  constructor(private userService: UserService,public navCtrl: NavController, public  alertCtrl: AlertController) { 
  
  }

  // doLogIn(){
  //    this.userService.loginUser(this.emailField,this.passwordField)
  //     .then(authData =>{
  //       //successful
  //       let leadToTabsPage = this.modalCtrl.create(TabsPage);
  //       leadToTabsPage.present();
  //     },error =>{
  //       let alert = this.alertCtrl.create({
  //         title:'Error logging in',
  //         subTitle:error.message,
  //         buttons:['OK']
  //       })
  //       alert.present();
  //       // alert("error logging in:" + error.message);
  //     });}

   createPayment(){
     this.userService.loadPaymentInfo(this.title,this.amount,this.shareTo,this.details)
      .then(paymentData =>{
        let successAlert = this.alertCtrl.create({
          title:'New payment event created',
          buttons:['Great!']
        })
        successAlert.present();
        this.title = '';
        this.amount = '';
        this.shareTo = '';
        this.details = '';
        
      },error =>{
        let alert = this.alertCtrl.create({
          title:'Error creating new payment event',
          subTitle:error.message,
          buttons:['OK']
        })
        alert.present();
        // alert("error logging in:" + error.message);
      });

   }


  takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType : Camera.PictureSourceType.CAMERA,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }

// =======
// >>>>>>> 62cfaa6105ac2103b3a9eff26e2004a7173bacc2
}
