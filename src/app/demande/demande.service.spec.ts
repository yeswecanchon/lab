/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing'
import { DemandeService } from './demande.service'

describe('DemandeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemandeService]
    })
  })

  it('should ...', inject([DemandeService], (service: DemandeService) => {
    expect(service).toBeTruthy()
  }))
})
