import { Injectable, Optional, SkipSelf } from '@angular/core';
import { CompItem } from '../components/overlay/comp-item';

import { FootswitchComponent } from '../components/overlay/footswitch/footswitch.component';
import { ModalComponent } from '../components/overlay/modal/modal.component';
import { NotifierComponent } from '../components/overlay/notifier/notifier.component';
import { ToasterComponent } from '../components/overlay/toaster/toaster.component';
import { SplashComponent } from '../components/overlay/splash/splash.component';
import { IOverlay } from './core.interface';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CoreOverlayService {
  private overlaySubject = new Subject<IOverlay>();
  overlayState = this.overlaySubject.asObservable();

  constructor(@Optional() @SkipSelf() prior: CoreOverlayService) {
    if (prior) {
      console.log('overlay service already exists');
      return prior;
    } else {
      console.log('created overlay service')
    }
  }

  activate(config:IOverlay) {
    this.overlaySubject.next(<IOverlay>config);
  }
  getComp(config) {
    let comp;
    switch(config.type) {
      case 'modal':
        comp = new CompItem(ModalComponent, config.data)
      break;
      case 'toast':
       // comp = new CompItem(ToasterComponent, config.data)
      break;
      case 'footSwith':
      //  comp = new CompItem(FootswitchComponent, config.data)
      break;
      case 'splash':
     //  comp = new CompItem(SplashComponent, config.data)
      break;
      case 'notify':
      //  comp = new CompItem(NotifierComponent, config.data)
      break;
      default:
        console.log('component not found');
      break;
    }
    return comp;
  }
  getComps() {
    return [
        /* new CompItem(SplashComponent, {}),
        new CompItem(ToasterComponent, {}),
        new CompItem(FootswitchComponent, {}), */
        new CompItem(ModalComponent, {test:'datata'})
        /* new CompItem(NotifierComponent, {}) */
    ]
  }
}
