import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrleasyListComponent } from './urleasy-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
//materials
import { MatSelectModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material';
//component
import { OverrideCardModule } from '../../../components/override-card/override-card.module';
import { RatingCardModule } from '../../../components/rating-card/rating-card.module';

@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule,
    OverrideCardModule,
    RatingCardModule,
    MatExpansionModule,
    FormsModule   
  ],
  declarations: [UrleasyListComponent],
  exports: [UrleasyListComponent]
})
export class UrleasyListModule { }