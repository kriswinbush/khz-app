//angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RootComponent } from './root.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
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
import { CatalogHttpService } from '../features/products/services/catalog-http.service';
//Store
import { CatalogStore } from '../features/products/store/catalog-store.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
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
  providers: [CoreOverlayService, CatalogStore, CatalogHttpService],
  declarations: [RootComponent],
  exports: [RootComponent],
})
export class RootModule {}
