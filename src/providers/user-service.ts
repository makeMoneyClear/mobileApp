import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import { HomePage } from '../pages/home/home';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserService {
  // private data : any;
  // public fireAuth: any;
  // public userProfile:any;
  // public paymentEvent : any;
  // public contact: any;
  // public mUserName : any;
  // public myUserId =  firebase.auth().currentUser.uid;
  // public storageRef : any;
  // constructor(public http: Http) {
  //   this.fireAuth = firebase.auth();
  //   this.userProfile = firebase.database().ref('users');
  //   this.paymentEvent = firebase.database().ref('users/'+this.myUserId).child('paymentInfo');
  //   this.contact = firebase.database().ref('users/'+this.myUserId).child('contactBook');
  //   this.mUserName = firebase.database().ref('users/'+this.myUserId);
  //   this.storageRef = firebase.storage().ref();

  private data : any;
  public fireAuth: any;
  public userProfile:any;
  public paymentEvent : any;
  public contact: any;
  public mUserName : any;
  public currentUser = firebase.auth().currentUser;
  public myUserId =  firebase.auth().currentUser.uid;
  public storageRef : any;

  constructor(public http: Http) {
    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('users');
    this.paymentEvent = firebase.database().ref('users/').child(this.currentUser.displayName).child('paymentInfo');
    this.contact = firebase.database().ref('users/').child(this.currentUser.displayName).child('contactBook');
    this.mUserName = firebase.database().ref('users/').child(this.currentUser.displayName);
    this.storageRef = firebase.storage().ref();


  }



  // return this.contact.child(group).child(name).update({
  //  name : name,
  //  other: other
  // });

//   signUpUser(email:string,password:string,name:string){
//     console.log('processing user sign up');
//     console.log (email);
//     console.log (password);
//     console.log (name);
    

//     return this.fireAuth.createUserWithEmailAndPassword(email,password)
//       .then((newUserCreated)=>{
//         this.fireAuth.signInWithEmailAndPassword(email,password)
//         .then((authenticatedUser)=>{

//           console.log('processing user sign up yo pass the data to database');
//           console.log(authenticatedUser.email);
//           // this.userProfile.child(authenticatedUser.email).set({
//           this.userProfile.child(authenticatedUser.email).set({
//             email:email,
//             userName : name
//           })
//       })
//   })
// }

      registerPasswordUser(email:string,displayName:string,password:string):any{
        var that = this;
          var user = null;
          //nullify empty arguments
          for (var i = 0; i < arguments.length; i++) {
            arguments[i] = arguments[i] ? arguments[i] : null;
          }

          firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(function () {
            user = firebase.auth().currentUser;
            user.sendEmailVerification();
          })
          .then(function () {
            user.updateProfile({
              displayName: displayName,
              photoURL: null
            });
          }).then(() => {
            console.log(displayName);
            console.log('display name success');
            
          }).then(function () {
            that.userProfile.child(displayName).child('idInfro').set({
              name : displayName,
              email : email
            });
          }).catch(function(error) {
            console.log(error.message);
          });
          console.log('Validation link was sent to ' + email + '.');
      }

 try(){
      console.log(this.currentUser.displayName);
    this.mUserName.child("alanisawesome").set({
      date_of_birth: "June 23, 1912",
      full_name: "Alan Turing"
    });
 }



 loadPaymentInfo(title1:string, amount1:string, shareTo1:string, details1:string, split1:string, average1:string):any{
var paymentEvent = firebase.database().ref('users/').child(this.currentUser.displayName).child('paymentInfo');
   console.log(this.paymentEvent.key);

  return this.paymentEvent.push({
      title:title1,
      amount:amount1,
      split:split1,
      shareTo:shareTo1,
      details:details1,
      average:average1
  });
 }

  loadPaymentInfoShareTo(title1:string, amount1:string, shareTo1:string, details1:string, split1:string, average1:string):any{
    console.log('triggered load payment shareTo');
    console.log(shareTo1);
  var paymentEvent = firebase.database().ref('users/').child(shareTo1).child('paymentInfo');
   console.log(this.paymentEvent.key);

  return this.paymentEvent.push({
      title:title1,
      amount:amount1,
      split:split1,
      shareTo:shareTo1,
      details:details1,
      average:average1
  });
 }


 loadContactInfo(group:string, name:string, other:string):any{
  var contact = firebase.database().ref('users/').child(this.currentUser.displayName).child('contactBook');
  return this.contact.child(group).child(name).update({
   name : name,
   other: other
  });
}

  loginUser (email:string,password:string):any{
    return this.fireAuth.signInWithEmailAndPassword(email,password);
  }

  logOutUser(){
    return this.fireAuth.signOut();
  }

  viewUser(userId : any){
    var userRef = this.userProfile.child(userId);
    return userRef.once('value'); //onlu use once
  }
  
  UserForgotPassword(email:any){
    return this.fireAuth.sendPasswordResetEmail(email);
  }
    
    loadContact(number){
    if (this.data){
      return Promise.resolve(this.data);
    }
    return new Promise(resolve=>{
      this.http.get('https://randomuser.me/api/?results='+ number)
        .map(res => res.json())
        .subscribe(data =>{
          this.data = data.results;
          resolve(this.data);
        })
    })




// uploadImg(){
//   var filename = Math.floor(Date.now()/1000);
//   var imageRef = this.storageRef.child(`images${filename}.jpg`);
//   imageRef.putString(HomePage.base64Image, )
// }

//  writeUserData(userId, name, email, imageUrl) {
//   firebase.database().ref('users/' + userId).set({
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }

// downloadRoommateContactInfo():any{
//   var contact = this.contact.child('roommate');
//   contact.on('value');
// }




//   createPayment(title:string,amount:string,shareTo:string,details:string){
//     return this.fireAuth.createUserWithEmailAndPassword(email,password)
//       .then((newUserCreated)=>{
//         this.fireAuth.signInWithEmailAndPassword(email,password)
//         .then((authenticatedUser)=>{
//           this.userProfile.child(authenticatedUser.uid).set({
//             email:email
//           })
//       })
//   })
// }

  }




}