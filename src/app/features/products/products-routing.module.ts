import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { ProductsContainerComponent } from './products-container/products-container.component';
import { ProductsViewComponent } from './products-view/products-view.component'; 
import { ItemViewComponent } from './item-view/item-view.component';
import { CartViewComponent } from './cart-view/cart-view.component';

const routes: Routes = [
  {path:'', component: ProductsContainerComponent, children:[
    {path: '', component: ProductsViewComponent},
    {path: 'item/:pId', component: ItemViewComponent},
    {path:'cart', component: CartViewComponent}
  ]}
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
