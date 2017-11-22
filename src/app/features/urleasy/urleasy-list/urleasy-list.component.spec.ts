import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrleasyListComponent } from './urleasy-list.component';

describe('UrleasyListComponent', () => {
  let component: UrleasyListComponent;
  let fixture: ComponentFixture<UrleasyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrleasyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrleasyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
