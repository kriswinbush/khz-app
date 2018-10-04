//angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//routes
import { UrleasyRoutingModule } from './urleasy-routing.module';

//materials
import { MatSelectModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material';

//modules
import { CoreModule } from '../../core/core.module';

//Components
import { UrleasyListComponent } from './urleasy-list/urleasy-list.component';
import { UrleasyContainerComponent } from './urleasy-container/urleasy-container.component';
import { FootswitchComponent } from '../../components/overlay/footswitch/footswitch.component';
import { OverrideCardComponent } from '../../components/override-card/override-card.component';
import { RatingCardComponent } from '../../components/rating-card/rating-card.component';
import { UrleasyRateComponent } from './urleasy-rate/urleasy-rate.component';

//Modal Components
import { ModalComponent } from '../../components/overlay/modal/modal.component';
import { NotifierComponent } from '../../components/overlay/notifier/notifier.component';
import { ToasterComponent } from '../../components/overlay/toaster/toaster.component';
import { SplashComponent } from '../../components/overlay/splash/splash.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    CoreModule,
    HttpModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatExpansionModule,
    ReactiveFormsModule, 
    FormsModule,
    UrleasyRoutingModule
  ],
  declarations: [
    UrleasyContainerComponent,
    RatingCardComponent,
    UrleasyListComponent,
    OverrideCardComponent,
    UrleasyRateComponent
  ],
  entryComponents:[]
  
})
export class UrleasyModule { }
