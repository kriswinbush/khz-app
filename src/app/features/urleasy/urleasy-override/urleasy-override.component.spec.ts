import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrleasyOverrideComponent } from './urleasy-override.component';

describe('UrleasyOverideComponent', () => {
  let component: UrleasyOverrideComponent;
  let fixture: ComponentFixture<UrleasyOverrideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrleasyOverrideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrleasyOverrideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
