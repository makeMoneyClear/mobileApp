import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
import { UserService } from '../../providers/user-service';
/*
  Generated class for the Details page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'details',
  templateUrl: 'details.html',
  providers : [UserService]
})
export class DetailsPage {
	event: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService, angFire: AngularFire) {
  	this.event = navParams.get('item'); 
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
