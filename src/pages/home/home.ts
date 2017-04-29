import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { UserService } from '../../providers/user-service';
// import { AngularFire,FirebaseListObservable} from'angularfire2';
// <<<<<<< HEAD
// =======
import * as firebase from 'firebase';




@Component({
  selector:'page-home',
  templateUrl: 'home.html',
  providers : [UserService]
})
export class HomePage {
  public base64Image: string;

  public title: any;
  public amount:any;
  public shareTo:any
  public details : any;
  public picture : any;


  // static get paramaters(){
  //   return [NgZone];
  // }

  // constructor(ngzone){
  //   this.ngzone = ngzone;
  // }

  // constructor(public navCtrl: NavController, public  alertCtrl: AlertController, public angFire:AngularFire) { 
    // this.payment = angFire.database.list('/Payment');

  constructor(private userService: UserService,public navCtrl: NavController, public  alertCtrl: AlertController) { 
  
  }

  // doLogIn(){
  //    this.userService.loginUser(this.emailField,this.passwordField)
  //     .then(authData =>{
  //       //successful
  //       let leadToTabsPage = this.modalCtrl.create(TabsPage);
  //       leadToTabsPage.present();
  //     },error =>{
  //       let alert = this.alertCtrl.create({
  //         title:'Error logging in',
  //         subTitle:error.message,
  //         buttons:['OK']
  //       })
  //       alert.present();
  //       // alert("error logging in:" + error.message);
  //     });}

   createPayment(){
     this.userService.loadPaymentInfo(this.title,this.amount,this.shareTo,this.details)
      .then(paymentData =>{
        let successAlert = this.alertCtrl.create({
          title:'New payment event created',
          buttons:['Great!']
        })
        successAlert.present();
        
      },error =>{
        let alert = this.alertCtrl.create({
          title:'Error creating new payment event',
          subTitle:error.message,
          buttons:['OK']
        })
        alert.present();
        // alert("error logging in:" + error.message);
      });

   }

  // addPayment():void{
  //   let confirm = this.alertCtrl.create({
  //     title: 'Confirm the payment information?',
  //     message:'Ask for {{shareTo}} for {{amount}} in total for {{title}}',
  //     buttons:[
  //       {
  //         text:'Finish',
  //         handler: data => {
  //           this.payment.push({
  //             title: data.title,
  //             amount: data.amount,
  //             shareTo: data.shareTo,
  //             details: data.details

  //           })
  //         }
  //       },

  //       {
  //         text:'Go Back',
  //         handler: () => {
  //           console.log('Go back clicked');
  //         }
  //       }
  //     ]
  //   });
  //   confirm.present()
  // }

  // takePicture(){
  //   Camera.getPicture({
  //       destinationType: Camera.DestinationType.DATA_URL,
  //       targetWidth: 1000,
  //       targetHeight: 1000
  //   }).then((imageData) => {
  //     // imageData is a base64 encoded string
  //       this.base64Image = "data:image/jpeg;base64," + imageData;
  //   }, (err) => {
  //       console.log(err);
  //   });
  // }

    // takepic(){
  //   var options = {
  //     destinationType: Camera.DestinationType.DATA_URL,
  //     sourceType: Camera.PictureSourceType.CAMERA,
  //     encodingType: Camera.EncodingType.JPEG.
  //     quality: 100,
  //     allowEdit: false,
  //     saveToPhotoAlbum: false

  //   };

  //   navigator.camera.getPicture((data)=>{
  //     var imgdata = "data:image/jpeg; base64," + data;
  //     this.zone.run(()=> this.image = imgdata);
      
  //   },(error)=>{
  //     alert(error);
  //   },options);
  // }

//   addBook():void{
//     let prompt = this.alertCtrl.create({
//         title: 'Book Title and Author',
//         message: 'Enter the books title and author',
//         inputs:[
//           {
//             name:'title',
//             placeholder:"Book Title"
//           },
//           {
//             name:'author',
//             placeholder: "Author's Name"
//           }
//         ],
//         buttons:[
//           {
//             text: "Cancel",
//             handler:data=>{
//               console.log("Cancel clicked");
//             }
//           },
//           {
//             text: "Save Book",
//             handler: data =>{
//               this.books.push({
//                 title: data.title,
//                 author: data.author
//               })
//             }
//           }
//         ]
//     });
//     prompt.present();
//   }

// editBook(book):void{
//     let prompt = this.alertCtrl.create({
//         title: 'Book Title and Author',
//         message: 'Enter the books title and author',
//         inputs:[
//           {
//             name:'title',
//             placeholder:book.title
//           },
//           {
//             name:'author',
//             placeholder: book.author
//           }
//         ],
//         buttons:[
//           {
//             text: "Cancel",
//             handler:data=>{
//               console.log("Cancel clicked");
//             }
//           },
//           {
//             text: "Save Book",
//             handler: data =>{
//               let newTitle: String = book.title;
//               let newAuthor: String = book.author;

//               if (data.title != ''){
//                 newTitle = data.title;
//               }
//               if (data.author != ''){
//                 newAuthor = data.author;
//               }
//               this.books.update(book.$key,{
//                 title: newTitle,
//                 author: newAuthor
//               })
//             }
//           }
//         ]
//     });
//     prompt.present();
//   }

//   deleteBook(bookID):void{
//     let prompt = this.alertCtrl.create({
//         title: 'Delete Book',
//         buttons:[
//           {
//             text: "Cancel",
//             handler:data=>{
//               console.log("Cancel clicked");
//             }
//           },
//           {
//             text: "Delete Book",
//             handler: data =>{
//               this.books.remove(bookID)
//             }
//           }
//         ]
//     });
//     prompt.present();
//   }

// <<<<<<< HEAD

  

  // addPayment():void{
  //   let confirm = this.alertCtrl.create({
  //     title: 'Confirm the payment information?',
  //     message:'Ask for {{shareTo}} for {{amount}} in total for {{title}}',
  //     buttons:[
  //       {
  //         text:'Finish',
  //         handler: data => {
  //           this.payment.push({
  //             title: data.title,
  //             amount: data.amount,
  //             shareTo: data.shareTo,
  //             details: data.details

  //           })
  //         }
  //       },

  //       {
  //         text:'Go Back',
  //         handler: () => {
  //           console.log('Go back clicked');
  //         }
  //       }
  //     ]
  //   });
  //   confirm.present()
  // }

  takePicture(){
    Camera.getPicture({
        destinationType: Camera.DestinationType.DATA_URL,
        targetWidth: 1000,
        targetHeight: 1000
    }).then((imageData) => {
      // imageData is a base64 encoded string
        this.base64Image = "data:image/jpeg;base64," + imageData;
    }, (err) => {
        console.log(err);
    });
  }

// =======
// >>>>>>> 62cfaa6105ac2103b3a9eff26e2004a7173bacc2
}
