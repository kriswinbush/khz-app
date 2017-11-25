import { Component, OnInit } from '@angular/core';
import { UrleasyNetService } from '../urleasy-net.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IHealthCheck } from '../../../core/core.interface';

@Component({
  selector: 'khz-urleasy-banner',
  templateUrl: './urleasy-banner.component.html',
  styleUrls: ['./urleasy-banner.component.scss']
})

export class UrleasyBannerComponent extends UrleasyNetService implements OnInit {
  banner:IHealthCheck;
  
  constructor(public http:Http) {
    super(http);
  }

  ngOnInit() {
    this.healthCheck()
      .subscribe(data => this.banner = data)
  }
}
