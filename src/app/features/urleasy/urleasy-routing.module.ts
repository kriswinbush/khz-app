import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components
import { UrleasyRateComponent } from './urleasy-rate/urleasy-rate.component';
import { UrleasyListComponent } from './urleasy-list/urleasy-list.component';
import { UrleasyContainerComponent } from './urleasy-container/urleasy-container.component';

const routes: Routes = [
  { path:'', component: UrleasyContainerComponent, children: [
    {path: 'overrule', component: UrleasyListComponent},
    {path: 'judge', component: UrleasyRateComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UrleasyRoutingModule { }
