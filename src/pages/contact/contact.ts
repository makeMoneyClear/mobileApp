import { Component } from '@angular/core';
import { UserService } from '../../providers/user-service';

import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers : [UserService]
})
export class ContactPage {

  private  roommateList : any;
  private  classmateList : any;


  constructor(public navCtrl: NavController,private userService: UserService) {
    this.createRoommateList();
    this.createClassmateList();

  }

    createRoommateList(){
    this.userService.loadContact(4)
      .then(data => {
        this.roommateList = data;
      })

  }

      createClassmateList(){
    this.userService.loadContact(10)
      .then(data => {
        this.classmateList = data;
      })

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

}

