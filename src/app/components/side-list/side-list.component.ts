import { Component, OnInit, OnDestroy } from '@angular/core';
import { animate, state, trigger, style, transition } from '@angular/animations';
import { Store } from '@ngrx/store';
import { getToggle } from './side-list.reducer';
import { SideList } from './side-list.model';
import { Observable } from 'rxjs/Observable';
import { ToggleDrawer } from './side-list.actions';

@Component({
  selector: 'khz-side-list',
  templateUrl: './side-list.component.html',
  styleUrls: ['./side-list.component.scss'],
  animations: [
    trigger('sideListState',[
      state('open', style({
        transform: 'translateX(0)'  
      })),
      state('close', style({
        transform: 'translateX(100%)'
      })),
      transition('open <=> closed', animate('1000ms ease-in-out'))
    ])
  ]
})

export class SideListComponent implements OnInit {
  sideListState$: Observable<any>;
  sideList:SideList;
 
  constructor(private store:Store<SideList>) {
    this.sideListState$ = store.select(str => str['SideList']);
  }

  clickHandler() {
    this.store.dispatch(new ToggleDrawer())
  }

  ngOnInit() {
    this.sideListState$.subscribe(state => this.sideList = state.active); 
  }

}
