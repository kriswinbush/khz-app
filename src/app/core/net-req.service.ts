import { Injectable } from '@angular/core';
import { environment as ENV } from '../../environments/environment';
import { Http, RequestOptions, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { ISetCfg } from './core.interface';

@Injectable()
export class NetReqService {

  constructor(public http:Http) { }
  
   getUrlRating(url) {
    let exePath = 'v1/rate?url=';
    let fullUrl = `${ENV.urleasy}/${exePath}${url}`;
    let myHeaders = new Headers({'X-Operator': 'kris', 'Content-Type': 'application/x-www-form-urlencoded'})
    let opts = new RequestOptions({headers: myHeaders})
    return this.http
      .get('assets/mockRating.json'/* fullUrl */, opts)
      .map(res => res.json())
  }

  setOverride(config:ISetCfg) {
    //
    let body = `url=${config.url}&category=${config.category}&storedas=${config.storeas}`;
    let myHeaders = new Headers({'X-Operator': config.user, 'Content-Type': 'application/x-www-form-urlencoded'})
    let opts = new RequestOptions({headers: myHeaders})
    /*this.http
        .post(`${ENV.speakeasy}/v1/override/add`, body, opts)
        .map(res => res.json()) */

    return Observable.of([{}])
    .map(res => res[0])
  }

  deleteOverride(url) {
    //DELETE /v1/override/delete?url='<url_string>'
    this.http
      .delete(`${ENV.urleasy}/v1/override/delete?url=${url}`)
      .map(res => res.json())
    return Observable.of([{}])
    .map(res => res[0])
  }

  viewOverride(config:ISetCfg) {
    //GET /v1/override/view?url="<url_string>"
    let myHeaders = new Headers({
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'X-Operator': config.user
    });
    let myParams = new URLSearchParams();
    myParams.append('id','1');

    let opts:RequestOptions = new RequestOptions({ headers: myHeaders/* , params: myParams */});
    this.http 
      .get( 'assets/mockRating.json'/* `${ENV.speakeasy}/v1/override/view?url=${config.url}` */, opts)
      .map(res => res.json())  
  }

  viewAllOverrides() {
    // GET /v1/override/viewall
    let myHeaders = new Headers({
      'Content-type': 'application/json',
      'Accept': 'application/json',
      'X-Operator': 'Kris'
    });
    let opts:RequestOptions = new RequestOptions({headers: myHeaders});
    return this.http
      .get('assets/mockData/mockOverrides.json'/* `${ENV.speakeasy}/v1/override/viewall` */,opts)
      .map(res => res.json())
  }

  healthCheck() {
    //GET /v1/healthcheck

    return this.http
      .get(`${ENV.urleasy}/v1/healthcheck`)
      .map(res => res.json())

    /* return Observable.of([ 
      {
        name:"speakeasy-service",
        version:"0.0.20170901204505",
        host:"kmj-us-speakeasy-7-15",
        build:"20170901-2045",
        uptime:602212016,
        startTime:"2017-09-13T22:34:10Z"
      }
    ])
    .map(res => res[0]) */
  }

}
