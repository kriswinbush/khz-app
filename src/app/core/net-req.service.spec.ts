import { TestBed, inject } from '@angular/core/testing';

import { NetReqService } from './net-req.service';

describe('NetReqService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NetReqService]
    });
  });

  it('should be created', inject([NetReqService], (service: NetReqService) => {
    expect(service).toBeTruthy();
  }));
});
