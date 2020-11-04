import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { HeroComponent } from './header/hero/hero.component';

import { SharedService } from './services/shared.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutUsComponent } from './about-us/about-us.component';
import { IconBlockComponent } from './about-us/icon-block/icon-block.component';
import { ImageTextComponent } from './image-text/image-text.component';
import { FeaturedItemsComponent } from './featured-items/featured-items.component';

import { SwiperModule } from 'ngx-swiper-wrapper';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    HeroComponent,
    AboutUsComponent,
    IconBlockComponent,
    ImageTextComponent,
    FeaturedItemsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    SwiperModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
