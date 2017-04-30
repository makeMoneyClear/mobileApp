import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

/*
  Generated class for the UserService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserService {
  private data : any;
  public fireAuth: any;
  public userProfile:any;
  public paymentEvent : any;
  public contact: any;
  public myUserId =  firebase.auth().currentUser.uid;

  constructor(public http: Http) {
    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('users');
    this.paymentEvent = firebase.database().ref('users/'+this.myUserId).child('paymentInfo');
    this.contact = firebase.database().ref('users/'+this.myUserId).child('contactBook');

  }


  signUpUser(email:string,password:string){
    return this.fireAuth.createUserWithEmailAndPassword(email,password)
      .then((newUserCreated)=>{
        this.fireAuth.signInWithEmailAndPassword(email,password)
        .then((authenticatedUser)=>{
          this.userProfile.child(authenticatedUser.uid).set({
            email:email
          })
      })
  })
}

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




