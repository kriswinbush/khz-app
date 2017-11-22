import { TestBed, inject } from '@angular/core/testing';

import { NetSwService } from './net-sw.service';

describe('NetSwService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NetSwService]
    });
  });

  it('should be created', inject([NetSwService], (service: NetSwService) => {
    expect(service).toBeTruthy();
  }));
});
