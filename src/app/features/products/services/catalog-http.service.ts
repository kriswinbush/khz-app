import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment as ENV } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
/* 
  mock data - Set catalog property in environments 
  file w/ http url to catalog data 
  from your backend service 
*/
import { Items } from '../mock/items';

@Injectable()
export class CatalogHttpService {
  constructor(private http:HttpClient) {}

  getCatalog() {
    let catalog;
    if(ENV.hasOwnProperty('catalog')){
      catalog = this.http.get(ENV['catalog'])
    } else {
      catalog = Observable.of(Items);
    }
    return catalog;
  }
  getCatalogItem(id) {
    let catalog;

    if(ENV.hasOwnProperty('catalog')){
      catalog = this.http.get(`${ENV['catalog']}/${id}`)
    } else {
      catalog = Items.filter(item => item.id == id);
    }
    return Observable.of(catalog);

  } 
}
