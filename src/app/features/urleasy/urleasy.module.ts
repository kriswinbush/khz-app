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
import { FootswitchModule } from '../../components/overlay/footswitch/footswitch.module';
import { ToasterModule } from '../../components/overlay/toaster/toaster.module';
import { ModalModule } from '../../components/overlay/modal/modal.module';
import { NotifierModule } from '../../components/overlay/notifier/notifier.module';
import { SplashModule } from '../../components/overlay/splash/splash.module';
import { RatingCardModule } from '../../components/rating-card/rating-card.module';
import { OverrideCardModule } from '../../components/override-card/override-card.module';
import { UrleasyRateModule } from './urleasy-rate/urleasy-rate.module';
import { UrleasyListModule } from './urleasy-list/urleasy-list.module';

//components
import { UrleasyReadComponent } from './urleasy-read/urleasy-read.component';
import { UrleasyListComponent } from './urleasy-list/urleasy-list.component';
import { UrleasyBannerComponent } from './urleasy-banner/urleasy-banner.component';
import { UrleasyContainerComponent } from './urleasy-container/urleasy-container.component';
import { FootswitchComponent } from '../../components/overlay/footswitch/footswitch.component';
import { ModalComponent } from '../../components/overlay/modal/modal.component';
import { NotifierComponent } from '../../components/overlay/notifier/notifier.component';
import { ToasterComponent } from '../../components/overlay/toaster/toaster.component';
import { SplashComponent } from '../../components/overlay/splash/splash.component';
import { UrleasyOverrideComponent } from './urleasy-override/urleasy-override.component';


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
    RatingCardModule,
    MatToolbarModule,
    MatExpansionModule,
    ReactiveFormsModule, 
    FormsModule,
    OverrideCardModule,
    FootswitchModule,
    ModalModule,
    ToasterModule,
    NotifierModule,
    SplashModule,
    UrleasyRateModule,
    UrleasyListModule, 
    UrleasyRoutingModule
  ],
  declarations: [
    UrleasyReadComponent,
    UrleasyBannerComponent,
    UrleasyContainerComponent,
    UrleasyOverrideComponent
  ],
  entryComponents:[FootswitchComponent, ModalComponent, ToasterComponent, NotifierComponent, SplashComponent]
  
})
export class UrleasyModule { }
