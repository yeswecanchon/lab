/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing'
import { HttpModule, JsonpModule } from '@angular/http'
import { PreferencesService } from './preferences.service'

describe('PreferencesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, JsonpModule],
      providers: [PreferencesService]
    })
  })

  it('should ...', inject([PreferencesService], (service: PreferencesService) => {
    expect(service).toBeTruthy()
  }))
})
