import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

/*
  Generated class for the Intro page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-intro',
  templateUrl: 'intro.html'
})

export class IntroPage {
  public element :any;

   constructor(public navCtrl: NavController) {
    
     this.element = document.getElementById("skip_button");

  //    this.element.addEventListener("click", function(event){
  //      alert("HI");
  //       navCtrl.push(LoginPage);
  //    }, false)
   }

  slides = [
    {
      image: "assets/img/moneybag-icon1.png",
      title: "Make The Money Clear!",
      description: "This app helps you to budget money with your friends, roommates, or whoever else!.",
    },
    {
      image: "assets/img/easy-logo-CC46FFD489-seeklogo.gif",
      title: "How to make payment?",
      description: " Just to to the payment page, type in money and inent, @friend or @group you want to share the payment with.",
    }
  ];



  launchLoginPage(){
    this.navCtrl.push(LoginPage);
  };

}
