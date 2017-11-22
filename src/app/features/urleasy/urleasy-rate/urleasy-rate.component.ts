import { Component, OnInit } from '@angular/core';
import { UrleasyNetService } from '../urleasy-net.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IRate } from '../../../core/core.interface';
import 'rxjs/Rx';

@Component({
  selector: 'khz-urleasy-rate',
  templateUrl: './urleasy-rate.component.html',
  styleUrls: ['./urleasy-rate.component.scss']
})
export class UrleasyRateComponent extends UrleasyNetService  implements OnInit {
  rateForm: FormGroup;
  results: Observable<any>; 
  rating:IRate;
  ratedCollection:FormArray;
  reqRates:any;
  speakeasyEnvSelected;
  speakeasyEnv = [
    {text:'Speak Easy Admin',url:'https://speakeasy-admin.e1-np.api.playstation.com'},
    {text:'Speak Easy',url:'https://speakeasy.e1-np.api.playstation.com'}
  ];

  constructor(private fb: FormBuilder, public http: Http, private sanitizer: DomSanitizer) {
    super(http);
    this.createForm();
  }

  buildFormArray():FormArray {
    this.ratedCollection = this.fb.array([ this.buildRateGroup() ]);
    return this.ratedCollection;
  }

  buildRateGroup():FormGroup {
    return this.fb.group({ url:[''] })
  }
 singleRate = false;
  reqRatedUrls() {
    console.log(this.rateForm.value);
    this.getUrlRating(this.rateForm.value)
    .subscribe(res => {
      this.reqRates = res;
      this.singleRate = typeof [res] == 'object';
    })

    /* this.postUrlRating(this.rateForm.value)
      .subscribe(res => {
        console.log(res)
        this.reqRates = res;
        this.singleRate = typeof [res] == 'object';
      }) */
    /* if(this.rateForm.value.ratedCollection.length > 1) {
      this.postUrlRating(this.rateForm.value)
        .subscribe(res => {
          console.log(res)
          this.reqRates = res;
          this.singleRate = typeof [res] == 'object';
        })
    } else {
      this.getUrlRating(this.rateForm.value)
        .subscribe(res => {
          this.reqRates = res;
          this.singleRate = typeof [res] == 'object';
        })
    } */

  }

  addRateItem() {
    this.ratedCollection.push(this.buildRateGroup())
  }

  createForm():FormGroup {
    return this.rateForm = this.fb.group({
      'speakeasyEnvironment':['https://speakeasy-admin.e1-np.api.playstation.com'],
      'ratedCollection': this.buildFormArray()
    });
  }
  
  ngOnInit() {}
}
