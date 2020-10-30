import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  @Output() screenResolution = new EventEmitter<number>();

  constructor() { }
}
