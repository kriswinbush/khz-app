import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideListComponent } from './side-list.component';

import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import {MatListModule} from '@angular/material';

import { StoreModule } from '@ngrx/store';
import { sideListReducer } from './side-list.reducer';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    StoreModule.forFeature('SideList', sideListReducer)
  ],
  declarations: [SideListComponent],
  exports: [SideListComponent]
})
export class SideListModule { }
