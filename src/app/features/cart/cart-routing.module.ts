import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//COmponents
import { CartContainerComponent } from './cart-container/cart-container.component';
import { CartViewComponent } from './cart-view/cart-view.component';

const routes: Routes = [
  {path:'', component: CartContainerComponent, children:[
    {path: '', component: CartViewComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
