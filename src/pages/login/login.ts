import { Component } from '@angular/core';
import { NavController, NavParams,LoadingController,AlertController,ModalController,App } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { UserService } from '../../providers/userService';
import { CardsPage } from '../cards/cards';
import { TabsPage } from '../tabs/tabs';


/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'login',
  templateUrl: 'login.html',
  providers : [UserService]
})
export class LoginPage {
  public emailField:any;
  public passwordField: any;
  public nameField : any;
  private users = [ ];
  private usersList : any;


  constructor(public app : App, private modalCtrl : ModalController, private alertCtrl:AlertController ,public navCtrl: NavController, public navParams: NavParams,private userService: UserService,private loadingCtrl:LoadingController) {
    this.emailField = "@illinois.edu";
    // this.listUsers();
    }

  // listUsers(){
  //   this.userService.loadUser(10)
  //     .then(data => {
  //       this.usersList = data;
  //     })

  // }

    // let alert = this.alertCtrl.create({
    //                 title:'Sign up secceeded!',
    //                 buttons:['ok']
    //               });
    //               alert.present();
                

  userSignUp(){
    this.userService.registerPasswordUser(this.emailField,this.nameField,this.passwordField)
      .then(authData =>{
        let alert =  this.alertCtrl.create({
          title:'Sign up succeeded',
          buttons:['Great!']
        })   
        alert.present(); 

        this.app.getRootNav().setRoot(TabsPage);
      },error =>{
        let alert =  this.alertCtrl.create({
          title:'Sign up failed',
          subTitle:error.message,
          buttons:['OK']
        })   
        alert.present(); // alert("error logging in:" + error.message);
      });

      // let loader = this.loadingCtrl.create({dismissOnPageChange:true,})

      // loader.present();

  }

 

  doLogIn(){
     this.userService.loginUser(this.emailField,this.passwordField)
      .then(authData =>{
        this.app.getRootNav().setRoot(TabsPage);
        console.log("change to tab page");
      },error =>{
        let alert = this.alertCtrl.create({
          title:'Error logging in',
          subTitle:error.message,
          buttons:['OK']
        })
        alert.present();
        // alert("error logging in:" + error.message);
      });

      // let loader = this.loadingCtrl.create({dismissOnPageChange:true,})

      // loader.present();

  }
    

  forgotPassword(){
    let prompt = this.alertCtrl.create({
      title:'Enter Your Email',
      message:'A new password will be send to your email',
      inputs:[{
        name:'email',
        placeholder:'example.123@xyz'
      },],
      buttons:[{
        text:'Cancel',
        handler:data=>{
          console.log('Cancel clicked');
        }},
        {
        text:'Submit',
        handler:data=>{
          //add preloader
          // let load = this.loadingCtrl.create({
          //   dismissOnPageChange:true,
          //   content:'Reseting your password ...'
          // });

          // load.present();
          this.userService.UserForgotPassword(data.email).then(()=>{
            //and a toast
            
              //show pop up
              let alert = this.alertCtrl.create({
                title:'Email is sent successfully, please check it!',
                buttons:['ok']
              });
              alert.present();
            
          },error =>{
          
              let alert = this.alertCtrl.create({
              title: 'Cannot send email',
              subTitle:error.message,
              buttons:['OK']
            }
            );
            alert.present();
            
          });
        },
      }]
    })
    prompt.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
