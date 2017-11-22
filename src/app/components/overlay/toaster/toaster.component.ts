import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition, keyframes } from '@angular/animations';

@Component({
  selector: 'psn-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss'],
  animations:[
    trigger('toaster',[
      state('in', style({transform: 'translateY(100vh)'})),
      transition('void => *', [
        animate(4000, keyframes([
          style({transform: 'translateY(100vh)', offset: 0}),
          style({transform: 'translateY(80vh)', offset: 0.1}),
          style({transform: 'translateY(80vh)', offset: 0.2}),
          style({transform: 'translateY(80vh)', offset: 0.3}),
          style({transform: 'translateY(80vh)', offset: 0.4}),
          style({transform: 'translateY(80vh)', offset: 0.5}),
          style({transform: 'translateY(80vh)', offset: 0.6}),
          style({transform: 'translateY(80vh)', offset: 0.7}),
          style({transform: 'translateY(80vh)', offset: 0.8}),
          style({transform: 'translateY(100vh)', offset: 1.0})
        ]))
      ]),
      /* transition('* => void', [
        animate(500, style({transform: 'translateY(100vh)'}))
      ]) */
    ])
  ]
})
export class ToasterComponent implements OnInit {
  toastState = 'in'
  constructor() { }
  toasterStarted(evt) {
    console.log(evt)
  }
  toasterDone(evt) {
    setTimeout(() => {
      //this.toastState = '';
    },2000);
    
  }
  ngOnInit() {
  }

}
