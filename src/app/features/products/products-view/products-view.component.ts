import { Component, OnInit } from '@angular/core'
import { CatalogStore } from '../store/catalog-store.service'

@Component({
  selector: 'khz-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.scss']
})
export class ProductsViewComponent implements OnInit {
  constructor(public catalogStore:CatalogStore) { 
    this.loadData()
  }
  loadData() {
    this.catalogStore.getItems();
  }
  add2Bakstet(item) {
    this.catalogStore.addToBasket(item);
  }
  ngOnInit() {}
}
