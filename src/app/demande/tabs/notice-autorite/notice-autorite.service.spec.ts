import { TestBed, inject } from '@angular/core/testing';

import { NoticeAutoriteService } from './notice-autorite.service';

describe('NoticeAutoriteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoticeAutoriteService]
    });
  });

  it('should ...', inject([NoticeAutoriteService], (service: NoticeAutoriteService) => {
    expect(service).toBeTruthy();
  }));
});
