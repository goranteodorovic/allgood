import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/services/shared.service';
import { HERO_LIST } from '../data.const';


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  image: string;
  subscription: Subscription;
  heroList = HERO_LIST

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
