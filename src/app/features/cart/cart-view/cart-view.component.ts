import { Component, OnInit } from '@angular/core';
import { CatalogStore } from '../state/catalog-store';

@Component({
  selector: 'khz-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent {
  constructor(public catalogStore:CatalogStore) {

   }

}
