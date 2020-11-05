import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from '../services/shared.service';
import { faSearch, faEnvelope, faBell, faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  brandImage: string = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWgAAABuCAQAAACgwkH3AAAA40lEQVR42u3SAQ0AAAzCsOPf9G0Q0kpYloMhkQBDg6HB0GBoDA2GBkODocHQGBoMDYYGQ4OhMTQYGgwNhgZDY2gwNBgaDA2GxtBgaDA0GBoMjaHB0GBoMDQYGkODocHQYGgMDYYGQ4OhwdAYGgwNhgZDg6ExNBgaDA2GBkNjaDA0GBoMDYbG0GBoMDQYGgyNocHQYGgwNBgaQ4OhwdBgaDA0hgZDg6HB0BgaDA2GBkODoTE0GBoMDYYGQ2NoMDQYGgwNhsbQYGgwNBgaDI2hwdBgaDA0GBpDg6HB0GBoMDSGhmYPY/MAb585hNQAAAAASUVORK5CYII="
  searchInputPlaceholderText: string = "Search or post...";
  mobile: boolean;

  subscription: Subscription;

  faSearch = faSearch;
  faEnvelope = faEnvelope;
  faBell = faBell;
  faChevronDown = faChevronDown;

  constructor(private service: SharedService) {
    this.subscription = this.screenResolutionSub()
  }

  ngOnInit(): void {}

  screenResolutionSub() {
    return this.service.screenResolution.subscribe((val: number) => {
      this.mobile = val < 768;
      this.brandImage = this.mobile ? "../assets/media/logo-mobile.png" : "../assets/media/logo-main.png";
      this.searchInputPlaceholderText = this.mobile ? "Search or post..." : "Location"
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }
}