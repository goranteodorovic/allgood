import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icon-block',
  templateUrl: './icon-block.component.html',
  styleUrls: ['./icon-block.component.scss']
})
export class IconBlockComponent implements OnInit {
  @Input() index: number;
  @Input() item: any;
  @Input() imagePath:string = "assets/media/";
  @Input() isLast: boolean;

  containerClasses = "icon-block";

  constructor() { }

  ngOnInit(): void {
    this.containerClasses += " block-" + this.index;
    this.containerClasses += this.isLast ? " is-last" : "";
    this.containerClasses += this.item.watchVideo ? " watch-video-included" : "";
  }
}
