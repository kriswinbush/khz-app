import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IRate } from '../../core/core.interface';

@Component({
  selector: 'psn-override-card',
  templateUrl: './override-card.component.html',
  styleUrls: ['./override-card.component.scss']
})
export class OverrideCardComponent implements OnInit {
  @Input() rating:IRate;
  @Output() previewSite:EventEmitter<any> = new EventEmitter();
  threatLevel:string;
  constructor() {}
  /*{
    "status":"RATED",
    "url":"www.sony.com",
    "ratedUrl":"sony.com",
    "categories":["Gaming, English","Dynamic Site"],
    "rating":0,
    "safe":true
  } */
  ngOnInit() {
    if('category' in this.rating) {
      switch(this.rating['category']) {
        case 'SAFE1':
          this.threatLevel = '1';
        break;
        case 'UNSAFE4':
          this.threatLevel = '4';
        break;
        case 'LEVEL5':
          this.threatLevel = '5';
        break;
        default:
          console.log('no case selected')
      }
    } else {
      console.log(this.rating)
      this.threatLevel = this.rating.categoryAsRating.rating.toString();
    }
  }
  setThreatLevel() {
    return {safe1: this.threatLevel === '1', unsafe4: this.threatLevel === '4', level5: this.threatLevel === '5'};
  }
  setRateLevel() {
    return {unknown: this.rating.status === 'UNKNOWN', rated: this.rating.status === 'RATED', error: this.rating.status === 'ERROR'}
  }
  previewUrl(url) {
    this.previewSite.emit(url);
  }

}
