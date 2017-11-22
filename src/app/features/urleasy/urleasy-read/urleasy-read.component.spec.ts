import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrleasyReadComponent } from './urleasy-read.component';

describe('SpeakeasyReadComponent', () => {
  let component: UrleasyReadComponent;
  let fixture: ComponentFixture<UrleasyReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrleasyReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrleasyReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
