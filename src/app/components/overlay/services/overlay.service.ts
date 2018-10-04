import { Injectable, Optional, SkipSelf } from '@angular/core';
import { CompItem } from '../comp-item';
//Components
import { FootswitchComponent } from '../footswitch/footswitch.component';
import { ModalComponent } from '../modal/modal.component';
import { NotifierComponent } from '../notifier/notifier.component';
import { ToasterComponent } from '../toaster/toaster.component';
import { SplashComponent } from '../splash/splash.component';
import { ItemViewComponent } from '../../../features/products/item-view/item-view.component';

//interfaces
import { IOverlay } from '../overlay.interface';
//rxjs
import { Subject } from 'rxjs/Subject';

@Injectable()
export class OverlayService {
  private _overlaySubject = new Subject<IOverlay>();
  overlayState = this._overlaySubject.asObservable();

  constructor(@Optional() @SkipSelf() prior: OverlayService) {
    if (prior) {
      console.log('overlay service already exists');
      return prior;
    } else {
      console.log('created overlay service')
    }
  }

  activate(config:IOverlay) {
    this._overlaySubject.next(<IOverlay>config);
  }
  getComp(config: IOverlay) {
    let comp;
    switch(config.type) {
      case 'modal':
        comp = new CompItem(ModalComponent, config.data)
      break;
      case 'previewItem':
        comp = new CompItem(ItemViewComponent, config.data);
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
