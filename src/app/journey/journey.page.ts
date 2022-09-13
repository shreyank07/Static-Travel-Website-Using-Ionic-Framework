import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.page.html',
  styleUrls: ['./journey.page.scss'],
})
export class JourneyPage implements OnInit {
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

  constructor() { 
    this.topStories = [
      {picture: "https://images.unsplash.com/photo-1512850183-6d7990f42385?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVydGljYWwlMjB3YWxscGFwZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80","link":"/men"},
      {picture: "https://images.unsplash.com/photo-1547516358-e98f85a80f20?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80","link":"/watches"},
      {picture: "https://images.unsplash.com/photo-1568206354559-addcfc739aab?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHZlcnRpY2FsfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80","link":"/men"},
      { picture: "https://images.squarespace-cdn.com/content/v1/5c6c0e67755be2334ac57d95/1598868135623-H8C0EWV47XAUM9MVGNMD/andrea-leopardi-7ZrS4VUshUU-unsplash.jpg?format=1000w","link":"/weboffers"},
      { picture: "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Fsundaytimes%2Fprod%2Fweb%2Fbin%2F4167ad16-caa9-11eb-b575-81b2a16c3be4.jpg?crop=1000%2C1500%2C625%2C0","link":"/men"}
    ]
  }

  ngOnInit() {
  }

}
