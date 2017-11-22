import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IRated } from '../../core/core.interface';
import { CoreOverlayService } from '../../core/core-overlay.service';

@Component({
  selector: 'khz-rating-card',
  templateUrl: './rating-card.component.html',
  styleUrls: ['./rating-card.component.scss']
})

export class RatingCardComponent implements OnInit {
  rating:IRated;
  @Input() set _rating(val) {
    if(val.categories && val.categories.length) {
      [this._parsedCategory, this._parsedSecondaryCat] = val.categories;
    }
    this.rating = val;
  }

  parsedCategory:string;
  parsedCountry:string;
  set _parsedCategory(val) {
    console.log(val);
    this.splitCategories(val)
      .then(res => {
        console.log(res)
        this.parsedCategory =res['category'];
        this.parsedCountry = res['country'];
      })
  }

  parsedSecondaryCat:Promise<{}>;
  set _parsedSecondaryCat(val) {
    console.log(val);
    if(val !== 'undefined') {
      this.splitCategories(val)
      .then(res => {
        console.log(res)
        this.parsedSecondaryCat = res['category'];
      })
    }
  }

  splitCategories(v) {
    return new Promise((res,rej) => {
      console.log(v)
      let country, category, categoryString = v.split(',');
      if(categoryString.length > 1) {
        category = categoryString[0].trim();
        country = categoryString[1].trim();
       } else {
        category = categoryString[0].trim();
        country = ''; 
       }
       res({category, country})

    }) 
  }
  @Output() previewSite = new EventEmitter();
  threatLevel;
  ratedCategory;
  constructor(private coreOverlayService: CoreOverlayService) {}

  ngOnInit() {
    //console.log(this.rating);
     // this.threatLevel = this.rating.rating
  }
  setThreatLevel() {
    this.threatLevel = this.rating.rating;
    return {safe1: this.threatLevel <= 3, unsafe4: this.threatLevel === 4, level5: this.threatLevel === 5};
  }
  setRateLevel() {
    return {unknown: this.rating.status === 'UNKNOWN', rated: this.rating.status === 'RATED', error: this.rating.status === 'ERROR'}
  }
  previewUrl(url) {
    let type = 'modal';
    let state = 'OPEN';
    this.coreOverlayService.activate({url, data:{}, type, state});
  }
}

/* {
categories : ["Entertainment and Music, English","Mature Content, English"],
ratedUrl:"gq.com",
rating:1,
safe:true,
status:"RATED",
url:"www.gq.com"
} */