import { Component, OnInit } from '@angular/core'
import { ActivatedRouteSnapshot } from '@angular/router'
import { ActivatedRoute } from '@angular/router'
import { CatalogStore } from '../store/catalog-store.service'

@Component({
  selector: 'khz-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})
export class ItemViewComponent implements OnInit {

  constructor(public route:ActivatedRoute, public catalogStore:CatalogStore) {
    console.log(route.snapshot.params.pId)
    this.loadData();
  }
  loadData() {
    this.catalogStore.getItemById(this.route.snapshot.params.pId);
  }
  ngOnInit() {}
}
