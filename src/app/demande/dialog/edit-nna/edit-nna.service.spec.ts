import { TestBed, inject } from '@angular/core/testing';

import { EditNnaService } from './edit-nna.service';

describe('EditNnaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditNnaService]
    });
  });

  it('should ...', inject([EditNnaService], (service: EditNnaService) => {
    expect(service).toBeTruthy();
  }));
});
