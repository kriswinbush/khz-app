import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverrideCardComponent } from './override-card.component';

import {MatCardModule} from '@angular/material';
import {MatIconModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatButtonModule} from '@angular/material';
import {MatSelectModule} from '@angular/material';
@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule
  ],
  declarations: [OverrideCardComponent],
  exports: [OverrideCardComponent]
})
export class OverrideCardModule { }