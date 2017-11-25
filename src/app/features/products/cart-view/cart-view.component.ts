import { Component, OnInit, OnDestroy } from '@angular/core'
import { CatalogStore } from '../store/catalog-store.service'
import {MatTableDataSource} from '@angular/material'
import { CatalogItem } from '../store/CatalogItem';
import { List } from 'immutable';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'khz-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.scss']
})
export class CartViewComponent implements OnInit, OnDestroy {
  displayedColumns = ['id', 'title', 'price', 'description', 'ordered'];
  dataSource;
  total = 0;
  subscription;
  constructor(public catalogStore:CatalogStore) {}
  
  ngOnInit() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
    this.subscription = this.catalogStore.basket
    /* .flatMap(res => res.toArray())  */
      .subscribe((DATA) => {
        const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
        this.total = DATA.reduce(reducer, 0);
        console.log(DATA.toArray());
        console.log(this.total)
        this.dataSource = new MatTableDataSource(DATA.toArray());
        
      })
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

export interface Element {
  id: number;
  title: string;
  price: number;
  description: string;
  ordered: boolean;
}

const ELEMENT_DATA: CatalogItem[]/* Element[] */ = [
  new CatalogItem({id: 1, title: 'Hydrogen', price: 1.0079, description: 'H', ordered: true}),
  new CatalogItem({id: 2, title: 'Helium', price: 4.0026, description: 'He', ordered: true}),
  new CatalogItem({id: 3, title: 'Lithium', price: 6.941, description: 'Li', ordered: true}),
  new CatalogItem({id: 4, title: 'Beryllium', price: 9.0122, description: 'Be', ordered: true}),
  new CatalogItem({id: 5, title: 'Boron', price: 10.811, description: 'B', ordered: true}),
  new CatalogItem({id: 6, title: 'Carbon', price: 12.0107, description: 'C', ordered: true}),
  new CatalogItem({id: 7, title: 'Nitrogen', price: 14.0067, description: 'N', ordered: true}),
  new CatalogItem({id: 8, title: 'Oxygen', price: 15.9994, description: 'O', ordered: true}),
  new CatalogItem({id: 9, title: 'Fluorine', price: 18.9984, description: 'F', ordered: true}),
  new CatalogItem({id: 10, title: 'Neon', price: 20.1797, description: 'Ne', ordered: true}),
  new CatalogItem({id: 11, title: 'Sodium', price: 22.9897, description: 'Na', ordered: true}),
  new CatalogItem({id: 12, title: 'Magnesium', price: 24.305, description: 'Mg', ordered: true}),
  new CatalogItem({id: 13, title: 'Aluminum', price: 26.9815, description: 'Al', ordered: true}),
  new CatalogItem({id: 14, title: 'Silicon', price: 28.0855, description: 'Si', ordered: true}),
  new CatalogItem({id: 15, title: 'Phosphorus', price: 30.9738, description: 'P', ordered: true}),
  new CatalogItem({id: 16, title: 'Sulfur', price: 32.065, description: 'S', ordered: true}),
  new CatalogItem({id: 17, title: 'Chlorine', price: 35.453, description: 'Cl', ordered: true}),
  new CatalogItem({id: 18, title: 'Argon', price: 39.948, description: 'Ar', ordered: true}),
  new CatalogItem({id: 19, title: 'Potassium', price: 39.0983, description: 'K', ordered: true}),
  new CatalogItem({id: 20, title: 'Calcium', price: 40.078, description: 'Ca', ordered: true})
];
