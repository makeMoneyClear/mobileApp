import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { UserService } from '../../providers/user-service';
import { CardsPage } from '../cards/cards';
// import { AngularFire,FirebaseListObservable} from'angularfire2';

import * as firebase from 'firebase';




@Component({
  selector:'page-home',
  templateUrl: 'home.html',
  providers : [UserService, CardsPage]
})
export class HomePage {
  public base64Image: string;
  // public titleList = [];
  // public detailsList = [];
  // public amountList = [];
  // public shareToList =[];
  public title: any;
  public amount:any;
  public shareTo:any
  public details : any;
  public picture : any;
  public contactList = [];
  public chickedContactList = [];
  // public storageRef : any;



  // static get paramaters(){
  //   return [NgZone];
  // }

  // constructor(ngzone){
  //   this.ngzone = ngzone;
  // }

  // constructor(public navCtrl: NavController, public  alertCtrl: AlertController, public angFire:AngularFire) { 
    // this.payment = angFire.database.list('/Payment');

  constructor(private cardPage : CardsPage, private userService: UserService,public navCtrl: NavController, public  alertCtrl: AlertController) { 
    this.showContact();
  
  }

   showContact(){
    var that = this;
    this.userService.contact.once('value',function(snapshot){
      snapshot.forEach(function(childSnapshot){
        childSnapshot.forEach(function(childChildSnapshot){
          that.contactList.push(childChildSnapshot.val().name);
          var childname = childChildSnapshot.val().name;
          // console.log(that.contactList[0]);
          console.log(childname);
        })
      })
    });}

  uploadImg(){
    let storageRef =  firebase.storage().ref();
    const filename = this.title;
    const imgRef = storageRef.child(`images/${filename}.jpg`);
    imgRef.putString(this.base64Image, firebase.storage.StringFormat.DATA_URL).then(snapshot=>{
      let alert = this.alertCtrl.create({
        title : 'Photo uploaded!',
        buttons:['Great!']
      })
      alert.present();
    },error =>{
      let alert = this.alertCtrl.create({
        title : 'Failed!',
        buttons:['OK']
    })
    alert.present();
  });
}

// downloadImg(){
//   // Create a reference with an initial file path and name
// var storage = firebase.storage();
// var pathReference = storage.ref('images/stars.jpg');

// // Create a reference from a Google Cloud Storage URI
// var gsReference = storage.refFromURL(`gs://makethemoneyclear.appspot.com/${this.title}.jpg`);
// //makethemoneyclear.appspot.com/Andrew.jpg

// // // Create a reference from an HTTPS URL
// // // Note that in the URL, characters are URL escaped!
// // var httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/b/bucket/o/images%20stars.jpg');
// }

   createPayment(){
     var that = this;
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
        // that.cardPage.paymentList = [];
        // that.cardPage.showPayment().then(console.log('tiiii'));
        
        
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
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType : Camera.PictureSourceType.CAMERA,
        allowEdit:true,
        encodingType : Camera.EncodingType.PNG,
        targetWidth: 500,
        targetHeight: 500,
        saveToPhotoAlbum : true
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
     this.uploadImg();
  }

  


}
