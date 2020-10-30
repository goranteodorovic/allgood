import { Component, HostListener, OnInit } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'allgood';

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.service.screenResolution.emit(event.target.innerWidth)
    console.log('resize')
  }

  constructor(private service: SharedService) { }

  ngOnInit() {
    this.service.screenResolution.emit(window.innerWidth)
  }
}
