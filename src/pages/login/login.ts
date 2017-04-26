import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { UserService } from '../../providers/user-service';
import { CardsPage } from '../cards/cards';
import { TabsPage } from '../tabs/tabs';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers : [UserService]
})
export class LoginPage {
  public emailField:any;
  public passwordField: any;
  private users = [ ];
  private usersList : any;


  constructor(public navCtrl: NavController, public navParams: NavParams,private userService: UserService,private loadingCtrl:LoadingController) {
    this.emailField = "simengl2@illinois.edu";
    this.listUsers();
    }

  listUsers(){
    this.userService.loadUser(10)
      .then(data => {
        this.usersList = data;
      })

  }

  userSignUp(){
    this.userService.signUpUser(this.emailField,this.passwordField)
      .then(authData =>{
        //successful
        this.navCtrl.setRoot(TabsPage);
      },error =>{
        // alert("error logging in:" + error.message);
      });

      let loader = this.loadingCtrl.create({dismissOnPageChange:true,})

      loader.present();

  }
    
  toSignUp(){
    this.navCtrl.push(SignupPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
