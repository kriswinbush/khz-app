import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../components/authentication/login/login.component'

const routes: Routes = [
  {path: '', redirectTo: '/products', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'urleasy', loadChildren: 'app/features/urleasy/urleasy.module#UrleasyModule'},
  {path: 'products', loadChildren: 'app/features/products/products.module#ProductsModule'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RootRoutingModule { }
