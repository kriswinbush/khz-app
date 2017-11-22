//angular
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
//material
import { MatSelectModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material';

//componennts
import { ModalComponent } from './modal.component';

//service
import { ModalNetService } from './modal-net.service';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers:[ModalNetService],
  declarations: [ModalComponent],
  exports: [ModalComponent]
})
export class ModalModule { } 