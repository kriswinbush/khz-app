import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'psn-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  @Output() openLeftSidebar = new EventEmitter<any>();
  @Output() toggleOverlay = new EventEmitter<any>();
  constructor() { }
  openLeft() {
    this.openLeftSidebar.emit('true');
  }
  openCompOverlay() {
    this.toggleOverlay.emit('true');
  }
  ngOnInit() {}
}
