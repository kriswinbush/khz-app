import { TestBed, inject } from '@angular/core/testing';

import { CatalogStoreService } from './catalog-store.service';

describe('CatalogStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatalogStoreService]
    });
  });

  it('should be created', inject([CatalogStoreService], (service: CatalogStoreService) => {
    expect(service).toBeTruthy();
  }));
});
