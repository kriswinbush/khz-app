import { Injectable } from '@angular/core';
import { environment as ENV } from '../../../../environments/environment';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ISetCfg, IHealthCheck } from '../../../core/core.interface';

@Injectable()
export class UrleasyNetService {

  constructor(public http:Http) { }
  
   getUrlRating(reqCfg) {
     console.log(reqCfg)
     //GET
    let fullUrl = `${reqCfg.speakeasyEnvironment}/v1/rate?url=${reqCfg.ratedCollection[0].url}`;
    console.log(fullUrl)
    let myHeaders = new Headers({'accept':'application/json','content-type':'application/json'})
    
    let opts = new RequestOptions({headers: myHeaders})
    return this.http
      .get('assets/mockData/mockRating.json'/* fullUrl  */, opts)
      .map(res => res.json())
  }

  postUrlRating(reqCfg) {
    console.log(reqCfg)
    //GET
    console.log(reqCfg.ratedCollection);
    const urlCollection = JSON.stringify(reqCfg.ratedCollection);
    console.log(urlCollection);
   let exePath = 'v1/rate';
   let fullUrl = `${reqCfg.speakeasyEnvironment}/${exePath}`;
   let myHeaders = new Headers({'accept':'application/json', 'Content-Type': 'application/json'})
   let opts = new RequestOptions({
     headers: myHeaders,
     body: urlCollection
    })

   return this.http
     .post('assets/mockRating.json'/* fullUrl */, opts)
     .map(res => res.json())
  }

  setOverride(config:ISetCfg) {
    //POST
    let body = `url=${config.url}&category=${config.category}&storedas=${config.storeas}`;
    let myHeaders = new Headers({'X-Operator': config.user, 'Content-Type': 'application/x-www-form-urlencoded'})
    let opts = new RequestOptions({headers: myHeaders})
    /*this.http
        .post(`${ENV.speakeasyAdmin}/v1/override/add`, body, opts)
        .map(res => res.json()) */

    return Observable.of([{}])
    .map(res => res[0])
  }

  deleteOverride(url) {
    //DELETE
    this.http
      .delete(`${ENV.urleasy}/v1/override/delete?url=${url}`)
      .map(res => res.json())
    return Observable.of([{}])
    .map(res => res[0])
  }

  viewOverride(config:ISetCfg) {
    //GET
    let myHeaders = new Headers({
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'X-Operator': config.user
    });
    let myParams = new URLSearchParams();
    myParams.append('id','1');

    let opts:RequestOptions = new RequestOptions({ headers: myHeaders/* , params: myParams */});
    this.http 
      .get('assets/mockRating.json' /* `${ENV.urleasy}/v1/override/view?url=${config.url}` */, opts)
      .map(res => res.json())  
  }

  viewAllOverrides() {
    //GET
    let uri = `${ENV.urleasy}/v1/override/viewall`;
    let localUri = 'assets/mockData/mockOverrides.json';
    let myHeaders = new Headers({'Accept': 'application/json','X-Operator': 'kris'});
    let opts:RequestOptions = new RequestOptions({headers: myHeaders});
    return this.http
      .get(localUri, opts)
      .map(res => res.json())
  }

  healthCheck():Observable<IHealthCheck> {
    //GET
    let myHeaders = new Headers({
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'X-Operator': 'kris'
    });
    let opts:RequestOptions = new RequestOptions({headers: myHeaders});
    let uri = `${ENV.urleasy}/v1/healthcheck`;
    let localUri = 'assets/mockData/mockHealthcheck.json'; 
    /* return this.http
      .get(uri,opts)
      .map(res => res.json()) */

    return Observable.of([ 
      {
        name:"Url Services",
        version:"0.0.20170901204505",
        host:"khz-US-urleasy-7-15",
        build:"20170901-2045",
        uptime:602212016,
        startTime:"2017-09-13T22:34:10Z"
      }
    ])
    .map(res => res[0])
  }

}
