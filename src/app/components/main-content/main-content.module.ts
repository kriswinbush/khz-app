//angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//componennts
import { MainContentComponent } from './main-content.component';

//material
import { MatSelectModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material';


@NgModule({
  imports: [
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule
  ],
  declarations: [MainContentComponent],
  providers: [],
  bootstrap: [],
  exports: [MainContentComponent]
})
export class MainContentModule { }