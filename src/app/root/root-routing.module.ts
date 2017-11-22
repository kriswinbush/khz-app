import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../components/authentication/login/login.component'
import { MainContentComponent } from  '../components/main-content/main-content.component';

const rootRoutes: Routes = [
  {path: '', redirectTo: '/urleasy', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainContentComponent},
  {path: 'urleasy', loadChildren: 'app/features/urleasy/urleasy.module#UrleasyModule'}
]

@NgModule({
  imports: [RouterModule.forRoot(rootRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
