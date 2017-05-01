import { Component } from '@angular/core';
import { UserService } from '../../providers/user-service';
import { AngularFire, FirebaseListObservable} from 'angularfire2';
import { NavController, AlertController } from 'ionic-angular';



@Component({
  selector: 'contact',
  templateUrl: 'contact.html',
  providers : [UserService]
})
export class ContactPage {

  private  roommateList = [];
  private  classmateList = [];
  public roommateName : any;
  public roommateNote : any;
  public classateName : any;
  public classmateNote : any;
  
  people: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController,private userService: UserService, angFire: AngularFire, private alertCtrl:AlertController) {
    // this.createRoommateList();
    // this.createClassmateList();
    this.showContact();
    this.roommateNote = "";
    this.classmateNote = "";
    this.people = angFire.database.list('/users');
  }

  // showContact(){
  //   this.userService.contact.child('roommate').on('value', snapshot=>{
  //     snapshot.forEach(function(childSnapshot){
  //       var data = childSnapshot.val();
  //       this.roommateList.push(data.name);
  //       console.log(this.roommateList);
  //     })
  //   })
  // }
  
  
    showContact(){
      var that = this;
    this.userService.contact.child('roommate').once('value',function(snapshot){
      snapshot.forEach(function(childSnapshot){
        that.roommateList.push(childSnapshot.key);
        var childname = childSnapshot.val().name;
        console.log(that.roommateList[0]);
        console.log(childname);
      })
    });

    this.userService.contact.child('196 classmate').once('value',function(snapshot){
      snapshot.forEach(function(childSnapshot){
        that.classmateList.push(childSnapshot.key);
      })
    })
  
  }

    //   showContact(){
    //   var that = this;
    // this.userService.contact.once('value',function(snapshot){
    //   snapshot.forEach(function(childSnapshot){
    //     childSnapshot.forEach(function(childChildSnapshot){
    //       that.roommateList.push(childChildSnapshot.key);
    //       var childname = childChildSnapshot.val().name;
    //       console.log(that.roommateList[0]);
    //       console.log(childname);
    //     })
    //   })
    // });

    // this.userService.contact.child('196 classmate').once('value',function(snapshot){
    //   snapshot.forEach(function(childSnapshot){
    //     that.classmateList.push(childSnapshot.key);
    //   })
    // })

    


      addRoommate(){
            let prompt = this.alertCtrl.create({
              title:'Add a new roommate',
              inputs:[{
                name:'roommateName',
                placeholder: 'name',
              },
              {
                name:'roommateNote',
                placeholder: 'note',
              },],
              buttons:[{
                text:'Cancel',
                handler:data=>{
                  console.log('Cancel clicked');
                }},
                {
                text:'Submit',
                handler:data=>{
                  this.userService.loadContactInfo("roommate",data.roommateName,data.roommateNote).then(()=>{
                    this.roommateList = [];
                    this.classmateList = [];
                   this.showContact();
                      let alert = this.alertCtrl.create({
                        title:'New roommate added',
                        buttons:['ok']
                      });
                      alert.present();
                  },error =>{
                      let alert = this.alertCtrl.create({
                      title: 'Failed',
                      subTitle:error.message,
                      buttons:['OK']
                    }
                    );
                    alert.present();
                  });
                },
              }
              
              
              
              ]
            })
            prompt.present();
            
  }

        addClassmate(){
            let prompt = this.alertCtrl.create({
              title:'Add a new classmate',
              inputs:[{
                name:'classmateName',
                placeholder:'name',
              },
              {
                name:'classmateNote',
                placeholder:'note',
              },],
              buttons:[{
                text:'Cancel',
                handler:data=>{
                  console.log('Cancel clicked');
                }},
                {
                text:'Submit',
                handler:data=>{
                  this.userService.loadContactInfo("196 classmate",data.classmateName,data.classmateNote).then(()=>{
                   this.roommateList = [];
                    this.classmateList = [];
                   this.showContact();
                      let alert = this.alertCtrl.create({
                        title:'New classmate added',
                        buttons:['ok']
                      });
                      alert.present();
                  },error =>{
                      let alert = this.alertCtrl.create({
                      title: 'Failed',
                      subTitle:error.message,
                      buttons:['OK']
                    }
                    );
                    alert.present();
                  });
                },
              }
              
              
              
              ]
            })
            prompt.present();
            
  }

  addNewGroups(){
            let prompt = this.alertCtrl.create({
              title:'Add a new group',
              inputs:[{
                placeholder: 'Group Name',
                name:'groupName',
              },
              {
                placeholder:'Add a member',
                name:'member',
              },{
                placeholder:'Add notes to the member',
                name:'memberNotes',
              },],
              buttons:[{
                text:'Cancel',
                handler:data=>{
                  console.log('Cancel clicked');
                }},
                {
                text:'Submit',
                handler:data=>{
                  this.userService.loadContactInfo(data.groupName,data.member,data.memberNotes).then(()=>{
                      let alert = this.alertCtrl.create({
                        title:'New group added',
                        buttons:['ok']
                      });
                      alert.present();
                  },error =>{
                      let alert = this.alertCtrl.create({
                      title: 'Failed',
                      subTitle:error.message,
                      buttons:['OK']
                    }
                    );
                    alert.present();
                  });
                },
              }
              
              
              
              ]
            })
            prompt.present();
            
  }






  //   createRoommateList(){
  //   this.userService.loadContact(4)
  //     .then(data => {
  //       this.roommateList = data;
  //     })

  // }

  //     createClassmateList(){
  //   this.userService.loadContact(10)
  //     .then(data => {
  //       this.classmateList = data;
  //     })

  }

  // ionViewDidLoad(){
  //   this.initMap();
  // }
  
  // initMap(){
  //    let latLng = new google.maps.LatLng( -34.397, 150.644);

  //    let mapOptions = {
  //      center: latLng,
  //      zoom:15,
  //      mapTypeId: google.map.MapTypeId.ROADMAP
  //    };

  //    this.map=new google.map.Map(this.mapElement.nativeElement, mapOptions);
  // }


