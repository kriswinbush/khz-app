import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverrideCardComponent } from './override-card.component';

describe('OverrideCardComponent', () => {
  let component: OverrideCardComponent;
  let fixture: ComponentFixture<OverrideCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverrideCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverrideCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
