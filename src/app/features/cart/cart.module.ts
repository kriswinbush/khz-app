import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CartCreateComponent } from './cart-create/cart-create.component';
import { CartReadComponent } from './cart-read/cart-read.component';
import { CartUpdateComponent } from './cart-update/cart-update.component';
import { CartDeleteComponent } from './cart-delete/cart-delete.component';
import { CartViewComponent } from './cart-view/cart-view.component';

//Material UI 
import { MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';

//Routing
import { CartRoutingModule } from './cart-routing.module';
import { CartContainerComponent } from './cart-container/cart-container.component';

//services
import { CatalogStore } from './state/catalog-store';
import { CartNetService } from './services/cart-net.service';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    CartRoutingModule
  ],
  providers: [CartNetService, CatalogStore],

  declarations: [CartCreateComponent, CartReadComponent, CartUpdateComponent, CartDeleteComponent, CartViewComponent, CartContainerComponent]
})
export class CartModule { }
