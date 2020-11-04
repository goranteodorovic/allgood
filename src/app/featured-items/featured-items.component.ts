import { Component, OnInit } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-featured-items',
  templateUrl: './featured-items.component.html',
  styleUrls: ['./featured-items.component.scss']
})
export class FeaturedItemsComponent implements OnInit {

  faHandHoldingHeart = faHandHoldingHeart;

  config: SwiperConfigInterface = {
    nested: true,
    direction: 'horizontal',
    allowTouchMove: true,
    slidesPerView: 4,
    loop: true,
    spaceBetween: 30,
    breakpoints:{
      0: { slidesPerView: 1 },
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 4 }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  }

  imagePath: string = "assets/media/";
  items = [
    { 
        id: 1,
        image: "green-sofa.jpg",
        name: 'Almost new sofa',
        author: 'John S.',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        price: 300
    },

    { 
        id: 2,
        image: "beige-sofa.jpg",
        name: 'Beige sofa',
        author: 'Harinder B.',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        price: 400
    },

    { 
        id: 3,
        image: "green-sofa.jpg",
        name: 'Almost new sofa',
        author: 'John S.',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        price: 300
    },

    { 
        id: 4,
        image: "beige-sofa.jpg",
        name: 'Beige sofa',
        author: 'Harinder B.',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        price: 400
    },

    { 
        id: 5,
        image: "green-sofa.jpg",
        name: 'Almost new sofa',
        author: 'John S.',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        price: 300
    },

    { 
        id: 6,
        image: "beige-sofa.jpg",
        name: 'Beige sofa',
        author: 'Harinder B.',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        price: 400
    },

    { 
        id: 7,
        image: "green-sofa.jpg",
        name: 'Almost new sofa',
        author: 'John S.',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
        price: 300
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
