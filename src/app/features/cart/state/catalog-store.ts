import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { List } from 'immutable';
import { CatalogItem } from '../services/CatalogItem';
import { CartNetService } from '../services/cart-net.service';

@Injectable()
export class CatalogStore {
  private _catalog: BehaviorSubject<List<CatalogItem>> = new BehaviorSubject(List([]));
  public readonly catalog: Observable<List<any>> = this._catalog.asObservable();

  constructor(private cartNet:CartNetService) {
    this.loadInitData();
  }
  loadInitData() {
    this.cartNet.getCatalogData()
      .subscribe(res => {
        console.log(res)
        let catalog = res.map((item: any):CatalogItem => {
          return new CatalogItem({
            id:item.id,
            price:item.price,
            description: item.description,
            title: item.title,
            complete: item.complete
          });
        });
        this._catalog.next(List(catalog));
      });
  }
}
