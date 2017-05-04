import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { LoginPage } from '../pages/login/login';
import { IntroPage } from '../pages/intro/intro';
import { DetailsPage } from '../pages/details/details';
import { TabsPage } from '../pages/tabs/tabs';
import * as firebase from 'firebase';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  public rootPage: any; 
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

  this.rootPage = IntroPage;

 
  
  // this.rootPage = LoginPage;


  firebase.initializeApp(config);


  firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
        console.log(user.email);
        console.log(firebase.auth().currentUser.displayName);
  } else {
        console.log('no user');
  }
});

var p = new Promise(function(resolve, reject) {
  var observer = function(user) {
        console.log(user.email);
        console.log(firebase.auth().currentUser.displayName);
    // Unsubscribe on first call.
    unsubscribe();
    // Resolve with current state.
    resolve(user);
  };

  
  var unsubscribe = firebase.auth().onAuthStateChanged(observer);
});
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
