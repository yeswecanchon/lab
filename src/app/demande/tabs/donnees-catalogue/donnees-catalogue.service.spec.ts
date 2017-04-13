import { TestBed, inject } from '@angular/core/testing';

import { DonneesCatalogueService } from './donnees-catalogue.service';

describe('DonneesCatalogueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DonneesCatalogueService]
    });
  });

  it('should ...', inject([DonneesCatalogueService], (service: DonneesCatalogueService) => {
    expect(service).toBeTruthy();
  }));
});
