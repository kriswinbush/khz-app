import { TestBed, inject } from '@angular/core/testing';

import { UrleasyNetService } from './urleasy-net.service';

describe('UrleasyNetService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrleasyNetService]
    });
  });

  it('should be created', inject([UrleasyNetService], (service: UrleasyNetService) => {
    expect(service).toBeTruthy();
  }));
});
