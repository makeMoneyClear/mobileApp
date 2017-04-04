import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
// import { NgZone } from 'angular2/core';

@Component({
  templateUrl: 'home.html'
})
export class HomePage {

  // static get paramaters(){
  //   return [NgZone];
  // }

  // constructor(ngzone){
  //   this.ngzone = ngzone;
  // }
  constructor(public alertCtrl: AlertController) { }

  // takepic(){
  //   var options = {
  //     destinationType: Camera.DestinationType.DATA_URL,
  //     sourceType: Camera.PictureSourceType.CAMERA,
  //     encodingType: Camera.EncodingType.JPEG.
  //     quality: 100,
  //     allowEdit: false,
  //     saveToPhotoAlbum: false

  //   };

  //   navigator.camera.getPicture((data)=>{
  //     var imgdata = "data:image/jpeg; base64," + data;
  //     this.zone.run(()=> this.image = imgdata);
      
  //   },(error)=>{
  //     alert(error);
  //   },options);
  // }

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
