/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing'
import { HttpModule, JsonpModule } from '@angular/http'
import { DemandeListService } from './demande-list.service'

describe('DemandeListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, JsonpModule],
      providers: [DemandeListService]
    })
  })

  it('should ...', inject([DemandeListService], (service: DemandeListService) => {
    expect(service).toBeTruthy()
  }))
})
