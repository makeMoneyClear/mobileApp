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
  public currentUserName = this.currentUser.displayName;
  public myUserId =  firebase.auth().currentUser.uid;
  public storageRef : any;
  constructor(public http: Http) {
    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('users');
    this.paymentEvent = firebase.database().ref('users/'+this.currentUserName+'/idInfro').child('paymentInfo');
    this.contact = firebase.database().ref('users/'+this.currentUserName+'/idInfro').child('contactBook');
    this.mUserName = firebase.database().ref('users/'+this.currentUserName+'/idInfro');
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

  signUpUser(email:string,password:string,name:string){
    console.log('processing user sign up');
    console.log (email);
    console.log (password);
    console.log (name);
    
  var that = this;
    return this.fireAuth.createUserWithEmailAndPassword(email,password)
    
      .then((newUserCreated)=>{
        this.fireAuth.signInWithEmailAndPassword(email,password)
        .then((authenticatedUser)=>{

          console.log('processing user sign up yo pass the data to database');
          console.log(authenticatedUser.uid);
          console.log(that.currentUser.displayName);
          // this.userProfile.child(authenticatedUser.email).set({

          that.currentUser.updateProfile({
            displayName: name,
            photoURL: "https://example.com/jane-q-user/profile.jpg"
          }).then(function() {
            console.log('user name set');
            console.log(that.currentUser.displayName);

            console.log(that.currentUser.displayName);
           that.userProfile.child(that.currentUser.displayName).child('idInfro').set({
            uid : authenticatedUser.uid,
            email : email,
            name : name
            // Update successful.
          }, function(error) {
            // An error happened.
          });

          // console.log(that.currentUserName);
          //  that.userProfile.child(that.currentUserName).set({
          //   uid : authenticatedUser.uid,
          //   email : email,
          //   name : name
          // })
          // console.log('lalalalalalalal');
      })
  })
  })}



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


 loadPaymentInfo(title1:string, amount1:string, shareTo1:string, details1:string):any{

  return this.paymentEvent.push({
      title:title1,
      amount:amount1,
      shareTo:shareTo1,
      details:details1
  });
 }


 loadContactInfo(group:string, name:string, other:string):any{
   
  return this.contact.child(group).child(name).update({
   name : name,
   other: other
  });
}

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

  }

  }




