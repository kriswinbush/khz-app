import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartReadComponent } from './cart-read.component';

describe('CartReadComponent', () => {
  let component: CartReadComponent;
  let fixture: ComponentFixture<CartReadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartReadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
