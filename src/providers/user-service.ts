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

  constructor(public http: Http) {
    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('users');
    this.paymentEvent = firebase.database().ref('paymentEvent');

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




