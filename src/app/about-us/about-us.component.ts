import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  iconBlockItems = [
    {
        iconBefore: "arrow.png",
        icon: "icon-gray.png",
        title: "Post an item",
        description: "Register to post an item for sale. <a class='red'>Register now!</a>",
        iconAfter: "dashed-line-gold.png"
    },
    {
        iconBefore: "",
        icon: "icon-gold.png",
        title: "Select an Organization",
        description: "Register to post an item for sale. <a class='red'>Register now!</a>",
        iconAfter: "dashed-line-gold.png"
    },
    {
        iconBefore: "",
        icon: "icon-green.png",
        title: "Buyer Makes the Payment",
        description: "Register to post an item for sale. <a class='red'>Register now!</a>",
        iconAfter: "dashed-line-gold.png"
    },
    {
        iconBefore: "",
        icon: "icon-purple.png",
        title: "Post an Item",
        description: "Register to post an item for sale. <a class='red'>Register now!</a>",
        iconAfter: "dashed-line-gold.png"
    },
    {
        iconBefore: "",
        icon: "heart.png",
        title: "Donate",
        description: "AllGood send the proceeds dorectly to the charity-campaign you choose to support",
        iconAfter: "",
        watchVideo: true
    }
]

  constructor() { }

  ngOnInit(): void {
  }

}
