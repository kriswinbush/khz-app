import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UrleasyReadComponent } from './urleasy-read/urleasy-read.component';
import { UrleasyRateComponent } from './urleasy-rate/urleasy-rate.component';
import { UrleasyListComponent } from './urleasy-list/urleasy-list.component';
import { UrleasyBannerComponent } from './urleasy-banner/urleasy-banner.component';
import { UrleasyContainerComponent } from './urleasy-container/urleasy-container.component';
import { UrleasyOverrideComponent } from './urleasy-override/urleasy-override.component';

const urleasyRoutes: Routes = [
  { path:'', component: UrleasyContainerComponent, children: [
    {path: '', component: UrleasyBannerComponent},
    {path: 'overrule', component: UrleasyListComponent},
    {path: 'judge', component: UrleasyRateComponent},
    {path: 'update', component: UrleasyRateComponent},
    {path: 'read', component: UrleasyReadComponent},
    {path: 'override', component: UrleasyOverrideComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(urleasyRoutes)],
  exports: [RouterModule]
})

export class UrleasyRoutingModule { }
