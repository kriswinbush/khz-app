//angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

//material
import { MatCardModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { MatIconModule } from '@angular/material';
import { MatSelectModule } from '@angular/material';

//components
import { ToasterComponent } from './toaster/toaster.component';
import { ModalComponent } from './modal/modal.component';
import { NotifierComponent } from './notifier/notifier.component';
import { SplashComponent } from './splash/splash.component';
import { OverlayComponent } from '../overlay/overlay.component';
import { FootswitchComponent } from './footswitch/footswitch.component';

//directive
import { HostDirective } from './host/host.directive';

//service
//import { OverlayService } from './overlay.service';

//module
import { FootswitchModule } from './footswitch/footswitch.module';
import { ToasterModule } from './toaster/toaster.module';
import { ModalModule } from './modal/modal.module';
import { NotifierModule } from './notifier/notifier.module';
import { SplashModule } from './splash/splash.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FootswitchModule,
    ToasterModule,
    NotifierModule,
    SplashModule,
    ModalModule,
    MatCardModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule
  ],
  declarations:[OverlayComponent, HostDirective],
  exports:[OverlayComponent],
  entryComponents:[FootswitchComponent,  ModalComponent]
})

export class OverlayModule { }
