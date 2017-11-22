import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrleasyContainerComponent } from './urleasy-container.component';

describe('UrleasyContainerComponent', () => {
  let component: UrleasyContainerComponent;
  let fixture: ComponentFixture<UrleasyContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrleasyContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrleasyContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
