import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
// import { UserService } from '../../providers/user-service';
// import * as firebase from 'firebase';

/*
  Generated class for the UserDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html',
  // providers : [UserService]
})
export class UserDetailPage {
  // private userPhotoUrl: any;
  // private userDisplayName : any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
      // var myUserId =  firebase.auth().currentUser.uid;
      // this.displayUser (myUserId);
  }


// displayUser(theUserId){
//   var that = this;
  
//   this.userService.viewUser(theUserId).then(snapshot =>{ //declear a new variable snapshot


//     // this.userPhotoUrl = snapshot.val().photo;
//     that.userDisplayName = snapshot.val().name.first;
//     })
// }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailPage');
  }

}
