import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakeasyRateComponent } from './speakeasy-rate.component';

describe('SpeakeasyCreateComponent', () => {
  let component: SpeakeasyRateComponent;
  let fixture: ComponentFixture<SpeakeasyRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakeasyRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakeasyRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
