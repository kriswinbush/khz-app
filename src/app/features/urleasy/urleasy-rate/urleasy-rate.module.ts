import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrleasyRateComponent } from './urleasy-rate.component';
import { ReactiveFormsModule } from '@angular/forms';
//materials
import { MatSelectModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material';
//component
import { RatingCardModule } from '../../../components/rating-card/rating-card.module';
@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    RatingCardModule   
  ],
  declarations: [UrleasyRateComponent],
  exports: [UrleasyRateComponent]
})
export class UrleasyRateModule { }