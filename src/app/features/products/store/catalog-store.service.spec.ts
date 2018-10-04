import { TestBed, inject } from '@angular/core/testing';

import { CatalogStore } from './catalog-store.service';

describe('CatalogStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatalogStore]
    });
  });

  it('should be created', inject([CatalogStore], (service: CatalogStore) => {
    expect(service).toBeTruthy();
  }));
});
