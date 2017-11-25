import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootComponent } from './root/root.component';
import { RootRoutingModule } from './root/root-routing.module';
import { RootModule } from './root/root.module';
import { CoreModule } from './core/core.module';

import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RootModule,
    CoreModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    RootRoutingModule
  ],
  declarations: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
