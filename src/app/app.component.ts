import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { Auth } from '../providers/auth';

import { LoadingController } from 'ionic-angular';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = LoginPage;
  loader: any;

  constructor(public auth: Auth, public loadingCtrl: LoadingController ){
    this.presentLoading();

    this.auth.login().then((isLoggedin)=>{
      if(isLoggedin){
        this.rootPage = HomePage;
      } else {
        this.rootPage = LoginPage;
      }

      this.loader.dismiss();
    });
  }

  presentLoading() {
    this.loader = this.loadingCtrl.create({
      content: "Authenticating..."
    });
    this.loader.present();
  }

}
