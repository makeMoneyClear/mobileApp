import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {


  constructor(public navCtrl: NavController) {

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

