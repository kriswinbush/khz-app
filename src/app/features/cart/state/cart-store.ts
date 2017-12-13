import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';
import { List } from 'immutable';
import { CartItem } from '../services/CartItem';

@Injectable()
export class CartStore {
  private _cart: BehaviorSubject<List<CartItem>> = new BehaviorSubject(List([]));
  public readonly cart: Observable<List<CartItem>> = this._cart.asObservable();

  constructor() {
    this.loadInitData();
  }
  loadInitData() {
    let items = [{
      title: 'Svage T',
      description: 'cotton blend T-shirt slim fit for the Svage Dad',
      price: '32.00'
    },{
      title: 'Svage Hat',
      description: '95Fifty fit snapback Savage Hat with Svage Logo',
      price: '45.00'
    },{
      title: 'Svage Bucket',
      description: 'cotton blend T-shirt slim fit for the Svage Dad',
      price: '60.00'
    },{
      title: 'Svage Hoodie',
      description: '95Fifty fit snapback Savage Hat with Svage Logo',
      price: '90.00'
    },{
      title: 'Svage Belt Buckle',
      description: 'cotton blend T-shirt slim fit for the Svage Dad',
      price: '80.00'
    },{
      title: 'Svage Bottle Opener',
      description: '95Fifty fit snapback Savage Hat with Svage Logo',
      price: '25.00'
    }];
    
  }
}
