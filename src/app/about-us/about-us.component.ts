import { Component, OnInit } from '@angular/core';
import { ABOUT_US } from "../data.const"

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  iconBlockItems = ABOUT_US

  constructor() { }

  ngOnInit(): void {
  }

}
