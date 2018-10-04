import { Component, OnInit } from '@angular/core';
import { CompItem } from '../components/overlay/comp-item';
import { Store } from '@ngrx/store';
import { getToggle } from '../components/side-list/side-list.reducer';
import { SideList } from '../components/side-list/side-list.model';
import { ISideList } from '../components/side-list/i-side-list';
import { Observable } from 'rxjs/Observable';
import { ToggleDrawer } from '../components/side-list/side-list.actions';
/* import { CatalogStore } from '../features/products/store/catalog-store.service'; */
@Component({
  selector: 'lockr-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  comps: CompItem[];
  showLeftSidebar;
  cartSizeValue:number = 0;
  /* showOverlay = true; */
  constructor(/* public catalogStore:CatalogStore, */ public store:Store<SideList>,/*  public coreOverlayService: CoreOverlayService,  */) {}

  
  ngOnInit() {
    //this.comps = this.overlayService.getComps();
    
  }
  sidebarToggle() {
    this.showLeftSidebar = this.showLeftSidebar ? false : true;
  }
  sideListToggle() {
    this.store.dispatch(new ToggleDrawer());
  }
  cartSize(val) {
    this.cartSizeValue = val.value;
    console.log(val)
  }
  /* overlayHandler() {
    this.showOverlay = this.showOverlay ? false : true;
  } */
  /* closeModal() {
    console.log('close Modal triggered')
    this.coreOverlayService.activate({state:'CLOSE'});
  } */
}
