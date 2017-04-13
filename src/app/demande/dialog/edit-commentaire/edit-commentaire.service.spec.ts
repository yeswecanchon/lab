import { TestBed, inject } from '@angular/core/testing';

import { EditCommentaireService } from './edit-commentaire.service';

describe('EditCommentaireService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EditCommentaireService]
    });
  });

  it('should ...', inject([EditCommentaireService], (service: EditCommentaireService) => {
    expect(service).toBeTruthy();
  }));
});
