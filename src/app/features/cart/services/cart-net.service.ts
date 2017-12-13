import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as ENV } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class CartNetService {
  public items = [{
    "id": 0,
    "title": "Svage T",
    "description": "cotton blend T-shirt slim fit for the Svage Dad",
    "price": 32.00,
    "complete": true
  },{
    "id": 1,
    "title": "Svage Hat",
    "description": "95Fifty fit snapback Savage Hat with Svage Logo",
    "price": 32.00,
    "complete": true
  },{
    "id": 2,
    "title": "Svage Bucket",
    "description": "cotton blend T-shirt slim fit for the Svage Dad",
    "price": 32.00,
    "complete": true
  },{
    "id": 3,
    "title": "Svage Hoodie",
    "description": "95Fifty fit snapback Savage Hat with Svage Logo",
    "price": 32.00,
    "complete": true
  },{
    "id": 4,
    "title": "Svage Belt Buckle",
    "description": "cotton blend T-shirt slim fit for the Svage Dad",
    "price": 32.00,
    "complete": true
  },{
    "id": 5,
    "title": "Svage Bottle Opener",
    "description": "95Fifty fit snapback Savage Hat with Svage Logo",
    "price": 32.00,
    "complete": true
  }];
  constructor(private http:HttpClient) { }

  getCatalogData() {
    //return this.http.get(ENV.catalog)
    return Observable.of(this.items)
  }

}
