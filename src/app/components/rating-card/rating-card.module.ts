import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingCardComponent } from './rating-card.component';
import { CoreOverlayService } from '../../core/core-overlay.service';

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
  providers:[CoreOverlayService],
  declarations: [RatingCardComponent],
  exports: [RatingCardComponent]
})
export class RatingCardModule { }
