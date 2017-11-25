import { TestBed, inject } from '@angular/core/testing';

import { CatalogHttpService } from './catalog-http.service';

describe('CatalogHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatalogHttpService]
    });
  });

  it('should be created', inject([CatalogHttpService], (service: CatalogHttpService) => {
    expect(service).toBeTruthy();
  }));
});
