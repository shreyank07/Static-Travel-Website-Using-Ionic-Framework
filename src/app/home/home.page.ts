import { Component, OnInit } from '@angular/core';
import { NavController, AlertController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  
  topStories: any;
  slideOpts = {
    
    speed: 400,
    loop: true,
    autoplay: {
      delay: 3500,
      
    },
    pagination : {
      el: '.swiper-pagination',
      clickable: true
    }
  };
  constructor(public navCtrl: NavController, private alertCtrl: AlertController, private platform: Platform) {
    this.topStories = [
      {picture: "https://www.teahub.io/photos/full/60-605021_travel-wallpaper-amazing-4k-ultra-hd-travel-pictures.jpg","link":"/men","class":"hero-image"},
      {picture: "https://swall.teahub.io/photos/small/27-275173_1920x1080-travel-wallpaper-best-travel-wallpapers-hd.jpg","link":"/watches"},
      {picture: "https://swall.teahub.io/photos/small/193-1936425_wallpaper-turquoise-beach-palm-4k-travel-beach-wallpaper.jpg","link":"/men"},
      { picture: "https://swall.teahub.io/photos/small/174-1749895_wallpaper-couple-mountains-travel-sunset-sequoia-couple-pictures.jpg","link":"/weboffers"},
      { picture: "https://quotefancy.com/media/wallpaper/3840x2160/313825-Hans-Christian-Andersen-Quote-To-travel-is-to-live.jpg","link":"/men"}
    ]
  }
  // showPlatform() {
    
  //   let text = 'I run on: ' + this.platform.platforms();
  //   let alert = this.alertCtrl.create({
  //     title: 'My Home',
  //     subTitle: text,
  //     buttons: ['Ok']
  //   });
  //   alert.present();
  // }
  
ngOnInit(){

}
}
