import { Component, Input, ViewChild, ComponentFactoryResolver, AfterViewInit, OnDestroy } from '@angular/core';
import { CompItem } from './comp-item';
import { HostDirective } from './host/host.directive';
import { IUtil } from '../../core/core.interface';
import { Subscription } from 'rxjs/Subscription';

import { FootswitchComponent } from './footswitch/footswitch.component';
import { ModalComponent } from './modal/modal.component';
import { NotifierComponent } from './notifier/notifier.component';
import { ToasterComponent } from './toaster/toaster.component';
import { SplashComponent } from './splash/splash.component';

import { CoreOverlayService } from '../../core/core-overlay.service';

@Component({
  selector: 'khz-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.scss'],
  /* entryComponents:[FootswitchComponent, ModalComponent] */
})

export class OverlayComponent implements AfterViewInit, OnDestroy {
  currentIdx = -1;
  @Input() comps: CompItem[];
  @Input() showOverlay;
  @ViewChild(HostDirective) psnHost: HostDirective;
  sub: any;
  interval: any;
  overlaySub:Subscription;
  
  constructor(private coreOverlayService: CoreOverlayService, private componentFactoryResolver: ComponentFactoryResolver) {
    console.log('we in here');
    this.overlaySub = this.coreOverlayService.overlayState.subscribe( overlayMessage => {
      console.log('overlay hit')
      if(overlayMessage.state === 'OPEN') {
        this.activate(overlayMessage)
      } else if(overlayMessage.state === 'CLOSE') {
        this.hide();
      }
      
    })
  }

  ngAfterViewInit() {}

  ngOnDestroy() {
    clearInterval(this.interval);
    this.overlaySub.unsubscribe();
  }

  activate(msg) {
    this.show(msg);
  }

  show(msg) {
    console.log(msg);
    let comp = this.coreOverlayService.getComp(msg);
    //this.loadComp(comp);
    let compFactory = this.componentFactoryResolver.resolveComponentFactory(comp.component);
    let viewContainerRef = this.psnHost.viewContainerRef;
    viewContainerRef.clear();
    let compRef = viewContainerRef.createComponent(compFactory);
    (<IUtil>compRef.instance).data = comp.data;   
  }

  hide() {
    let viewContainerRef = this.psnHost.viewContainerRef;
    viewContainerRef.clear();
  }

  loadComp(comp) {
    let compFactory = this.componentFactoryResolver.resolveComponentFactory(comp);  
  }

  loadComps() {
    this.currentIdx = (this.currentIdx + 1) % this.comps.length;
    let compItem = this.comps[0/* this.currentIdx */];

    let compFactory = this.componentFactoryResolver.resolveComponentFactory(compItem.component);
    let viewContainerRef = this.psnHost.viewContainerRef;
    viewContainerRef.clear();
    let compRef = viewContainerRef.createComponent(compFactory);
    (<IUtil>compRef.instance).data = compItem.data;
  }

  getComps() {
    this.interval = setInterval(() => { this.loadComps(); }, 3000)
  }
}
