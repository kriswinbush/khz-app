//angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root.component';
import { RouterModule } from '@angular/router';

/* DSL Application Components */
import { MainContentModule } from '../components/main-content/main-content.module';
import { OverlayModule } from '../components/overlay/overlay.module';
import { SidebarModule } from '../components/sidebar/sidebar.module';
import { AuthenticationModule } from '../components/authentication/authentication.module';

/* Material.angular.io Component Library */
import { MatToolbarModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatIconModule } from '@angular/material';

/* ngrx/store */
import { StoreModule } from '@ngrx/store';
import { SideListModule } from '../components/side-list/side-list.module';
import { sideListReducer } from '../components/side-list/side-list.reducer';
//Service
import { CoreOverlayService } from '../core/core-overlay.service';
@NgModule({
  imports: [
    CommonModule,
    SidebarModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    OverlayModule,
    AuthenticationModule,
    MainContentModule,
    RouterModule,
    StoreModule.forRoot(sideListReducer),
    SideListModule
  ],
  providers: [CoreOverlayService],
  declarations: [RootComponent],
  exports: [RootComponent],
})
export class RootModule {}
