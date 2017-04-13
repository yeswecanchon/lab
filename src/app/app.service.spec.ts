/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing'
import { AppService } from './app.service'
import { HttpModule, JsonpModule } from '@angular/http'
import { HttpDefaultService } from './_utils'


describe('AppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule, JsonpModule],
      providers: [AppService, HttpDefaultService]
    })
  })

  it('should ...', inject([AppService], (service: AppService) => {
    expect(service).toBeTruthy()
  }))
})
