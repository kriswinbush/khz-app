import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';
import { List } from 'immutable';
import { CatalogItem } from './CatalogItem';
import { CatalogHttpService } from '../services/catalog-http.service';
@Injectable()
export class CatalogStore {
  //Product Catalog
  private _catalog: BehaviorSubject<List<CatalogItem>> = new BehaviorSubject(List([]));
  public readonly catalog: Observable<List<CatalogItem>> = this._catalog.asObservable();

  //Shopping Cart
  private _basket: BehaviorSubject<List<CatalogItem>> = new BehaviorSubject(List([]));
  public readonly basket: Observable<List<CatalogItem>> = this._basket.asObservable();

  constructor(private catalogHttp:CatalogHttpService) {
    this.getItems();
  }
  addToBasket(item) {
    //should just push ID of item and in cart pull all Items by ID
    let record = new CatalogItem({
      id: item.id,
      imgUri: item.imgUri,
      price: item.price,
      description: item.description,
      title: item.title,
      fit: item.fit,
      ordered: item.ordered
    })
    let cartItem = this._basket.getValue().push(record);
    
    this._basket.next(List(cartItem));
    //console.log(this._basket)

  }

  getBasketItems( ) {
    //might be able to filter the values out of the observable
  }

  clearSubject() {
    this._catalog.complete();
    this._catalog = new BehaviorSubject(List([]));
  }

  getItems() {
    this.catalogHttp.getCatalog()
      .subscribe(response => {
        let items = response.map( (catalogItem: any):CatalogItem => {
          return new CatalogItem({
            id: catalogItem.id,
            imgUri: catalogItem.imgUri,
            price: catalogItem.price,
            fit: catalogItem.fit,
            description: catalogItem.description,
            title: catalogItem.title,
            ordered: catalogItem.ordered
          });
        });
        this._catalog.next(List(items));
      })
  }
  getItemById(id) {
    //this.clearSubject();
    this.catalogHttp.getCatalogItem(id)
      .subscribe(response => {
        let item = response.map( (catalogItem: any):CatalogItem => {
          return new CatalogItem({
            id: catalogItem.id,
            imgUri: catalogItem.imgUri,
            price: catalogItem.price,
            fit: catalogItem.fit,
            description: catalogItem.description,
            title: catalogItem.title,
            ordered: catalogItem.ordered
          });
        });
        console.log(item)
        this._catalog.next(List(item));
      })
  }
}
