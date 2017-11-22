import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[psn-host]'
})
export class HostDirective {

  constructor(public viewContainerRef: ViewContainerRef) {
  }
}
