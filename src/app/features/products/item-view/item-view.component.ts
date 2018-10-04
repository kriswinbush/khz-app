import { Component, OnInit, OnDestroy } from '@angular/core'
import { ActivatedRouteSnapshot } from '@angular/router'
import { ActivatedRoute } from '@angular/router'
import { CatalogStore } from '../store/catalog-store.service'
import { ModalNetService } from '../../../components/overlay/modal/services/modal-net.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'khz-item-view',
  templateUrl: './item-view.component.html',
  styleUrls: ['./item-view.component.scss']
})
export class ItemViewComponent implements OnInit {
  public sub: Subscription;
  public item:any;
  constructor(public modalNetService:ModalNetService, public route:ActivatedRoute, public catalogStore:CatalogStore) {}
  ngOnInit() {
    let pId:number;
    if(this.hasOwnProperty('data')){
      pId = this['data'].item.get('id');
    }else {
      pId = this.route.snapshot.params.pId;
    }
    this.loadData(pId);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  loadData(pId) {
    let storeView = 'catalog';
    if(this['data'].item.ordered) {
      storeView = 'basket';
    }
    this.sub = this.catalogStore[storeView].subscribe(catalog => {
      let result = catalog.filter(item => item.id === pId);
      this.item = result.toArray()[0]
    });
  }

  add2Basket(item) {
    this.catalogStore.addToBasket(item, item.quantity);
    this.closeModal();
  }

  closeModal() {
    this.modalNetService.sendCloseModal({type:'CLOSE_MODAL'});
   }
}
