import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFire,FirebaseListObservable} from'angularfire2';

/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  users:FirebaseListObservable<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController, public angFire:AngularFire) {
    this.users = angFire.database.list('/Users')
  }


  // addBook():void{
  //   let prompt = this.alertCtrl.create({
  //       title: 'Registration Conformed!',
  //       message: 'Enter the books title and author',
  //       inputs:[
  //         {
  //           name:'title',
  //           placeholder:"Book Tille"
  //         },
  //         {
  //           name:'author',
  //           placeholder: "Author's Name"
  //         }
  //       ],
  //       buttons:[
  //         {
  //           text: "Cancel",
  //           handler:data=>{
  //             console.log("Cancel clicked");
  //           }
  //         },
  //         {
  //           text: "Save Book",
  //           handler: data =>{
  //             this.books.push({
  //               title: data.title,
  //               author: data.author,
  //             })
  //           }
  //         }
  //       ]
  //   });
  //   prompt.present();
  // }


  confirm():void{
    let prompt = this.alertCtrl.create({
        title: 'Registration Conformed!',
        message: 'Welcome to Make The Money Clear',
        buttons:[{
          text:"Confirmed",
          handler: data=>{
            this.users.push({
              userEmail: data.userEmail,
              userPassword: data.userPassword,
            })
          }
      }, {
        text:"Go back",
        handler: data=>{
          console.log("make change");
        }

      }]
      });
    prompt.present();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
