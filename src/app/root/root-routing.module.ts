import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../components/authentication/login/login.component'
import { MainContentComponent } from  '../components/main-content/main-content.component';

const routes: Routes = [
  {path: '', redirectTo: '/cart', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainContentComponent},
  {path: 'cart', loadChildren: 'app/features/cart/cart.module#CartModule'},
  {path: 'urleasy', loadChildren: 'app/features/urleasy/urleasy.module#UrleasyModule'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RootRoutingModule { }
