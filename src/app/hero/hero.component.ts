import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  image: string;
  subscription: Subscription;
  heroList = [
    {
        icon: faHandHoldingUsd,
        text: "Turn your stuff into cach donations",
        color: "green"
    },
    {
        icon: faMobile,
        text: "Shop allgood market - and support charity",
        color: "purple"
    },
    {
        icon: faHeart,
        text: "A new way to fund raise",
        color: "red"
    }
  ]

  constructor(private service: SharedService) {
    this.subscription = this.screenResolutionSub()
  }

  ngOnInit(): void {
    this.subscription = this.screenResolutionSub()
  }

  screenResolutionSub() {
    return this.service.screenResolution.subscribe((val: number) => {
      this.image = val < 768 ? "../../../assets/media/hero-mobile.png" : "../../../assets/media/hero-main.png";
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}
