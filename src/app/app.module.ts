import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RootComponent } from './root/root.component';
import { AppRoutingModule } from './root/root-routing.module';
import { RootModule } from './root/root.module';
import { CoreModule } from './core/core.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RootModule,
    CoreModule,
    AppRoutingModule
  ],
  declarations: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
