import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrleasyBannerComponent } from './urleasy-banner.component';

describe('UrleasyBannerComponent', () => {
  let component: UrleasyBannerComponent;
  let fixture: ComponentFixture<UrleasyBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrleasyBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrleasyBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
