import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
import { CardsPage } from '../cards/cards'
import { UserService } from '../../providers/userService';
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
	 public paymentTitle: any;
   public paymentAmount : any;
   public paymentSplit : any;
   public paymentAverage : any;
   public paymentDetails : any;


  constructor(public navCtrl: NavController, public navParams: NavParams, private userService: UserService, angFire: AngularFire) {
  	// this.event = navParams.get('item'); 
     this.paymentTitle = navParams.get('passPaymentTitle');
     console.log(this.paymentTitle);
     this.paymentAmount = navParams.get('passPaymentAmount');
     console.log(this.paymentAmount);
     this.paymentSplit = navParams.get('passPaymentSplit');
     console.log(this.paymentSplit);
     this.paymentAverage = navParams.get('passPaymentAverage');
     console.log(this.paymentAverage);
     this.paymentDetails = navParams.get('passPaymentDetails');
     console.log(this.paymentDetails);

     // let name = navParams.get('name');
     // this.event = id;
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

}
