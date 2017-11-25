import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NetReqService } from './net-req.service';
import { CoreOverlayService } from './core-overlay.service';
@NgModule({
  imports: [
    CommonModule
  ],
  providers: [NetReqService, CoreOverlayService],
  declarations: []
})
export class CoreModule { }
