import { Component } from '@angular/core';
import { UrleasyNetService } from '../urleasy-net.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Http } from '@angular/http';
//import * as Rx from 'rxjs/Rx';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/withLatestFrom';
import { Observable } from 'rxjs/Observable';
import { ISetCfg } from '../../../core/core.interface';


@Component({
  selector: 'khz-urleasy-list',
  templateUrl: './urleasy-list.component.html',
  styleUrls: ['./urleasy-list.component.scss']
})

export class UrleasyListComponent extends UrleasyNetService {
  siteUrl:SafeUrl;
  searchForm:FormGroup;
  overrideForm: FormGroup;
  searchField:FormControl = new FormControl();
  overrideList:Observable<ISetCfg[]>;
  displayTitle = '';
  category = [
    {text:'Safe 1',val:'safe1'},
    {text:'Unsafe 4',val:'unsafe4'},
    {text:'Level 5',val:'level5'}
  ];
  storeItAs = [
    {text: 'Base', val:'BASE'},
    {text: 'As Is', val: 'ASIS'}
  ]
  constructor(private fb:FormBuilder, public http:Http, private sanitizer:DomSanitizer) {
    super(http);
    this.searchForm = this.fb.group({'searchField': ['']});

    this.searchField.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .withLatestFrom( this.viewAllOverrides(), (inp, list):Observable<ISetCfg[]> => {
        console.log(list)
        let filterableList = list.overrideUrls;
        return Observable.of(filterableList.filter( rating => new RegExp(inp).test(rating.url))) 
      }).subscribe((list):Observable<ISetCfg[]> =>{
        console.log(list)
        return  this.overrideList = list;
      });
  }
  setIframeUrl(url) {
    this.displayTitle = url;
    this.siteUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
