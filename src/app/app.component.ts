import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { LoginPage } from '../pages/login/login';

import { TabsPage } from '../pages/tabs/tabs';
import * as firebase from 'firebase';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public rootPage: any;
  // rootPage = TabsPage;

  constructor(platform: Platform) {

      // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDvLRc0AQiy7eaIuiuojUHpXTwvOh0A1QA",
    authDomain: "makethemoneyclear.firebaseapp.com",
    databaseURL: "https://makethemoneyclear.firebaseio.com",
    projectId: "makethemoneyclear",
    storageBucket: "makethemoneyclear.appspot.com",
    messagingSenderId: "840233556621"
  };
  firebase.initializeApp(config);
  
  // this.rootPage = TabsPage;

  firebase.auth().onAuthStateChanged((user) => {
    if (user){
      this.rootPage = TabsPage;
      }else {
      this.rootPage = LoginPage;
    }
  });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
