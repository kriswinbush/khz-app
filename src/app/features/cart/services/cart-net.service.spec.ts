import { TestBed, inject } from '@angular/core/testing';

import { CartNetService } from './cart-net.service';

describe('CartNetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartNetService]
    });
  });

  it('should be created', inject([CartNetService], (service: CartNetService) => {
    expect(service).toBeTruthy();
  }));
});
