import { Component, OnInit } from '@angular/core';
import { CompItem } from '../components/overlay/comp-item';
import { NetSwService } from '../core/net-sw.service';
import { Store } from '@ngrx/store';
import { getToggle } from '../components/side-list/side-list.reducer';
import { SideList } from '../components/side-list/side-list.model';
import { ISideList } from '../components/side-list/i-side-list';
import { Observable } from 'rxjs/Observable';
import { ToggleDrawer } from '../components/side-list/side-list.actions';

@Component({
  selector: 'lockr-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit {
  comps: CompItem[];
  showLeftSidebar;
  /* showOverlay = true; */
  constructor(public store:Store<SideList>,/*  public coreOverlayService: CoreOverlayService,  */public netSw: NetSwService) {}
  
  ngOnInit() {
    console.log(this.netSw)
    //this.comps = this.overlayService.getComps();
  }
  sidebarToggle() {
    this.showLeftSidebar = this.showLeftSidebar ? false : true;
  }
  sideListToggle() {
    this.store.dispatch(new ToggleDrawer());
  }
  /* overlayHandler() {
    this.showOverlay = this.showOverlay ? false : true;
  } */
  /* closeModal() {
    console.log('close Modal triggered')
    this.coreOverlayService.activate({state:'CLOSE'});
  } */
}
