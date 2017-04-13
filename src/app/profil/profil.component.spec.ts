/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'
import { HttpModule, JsonpModule } from '@angular/http'

import { ProfilComponent } from './profil.component'
import { AppService } from '../app.service'
import { HttpDefaultService } from '../_utils'
import { MaterialModule } from '@angular/material'

describe('ProfilComponent', () => {
  let component: ProfilComponent
  let fixture: ComponentFixture<ProfilComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        HttpModule,
        JsonpModule
      ],
      declarations: [ProfilComponent],
      providers: [
        AppService,
        HttpDefaultService
      ]
    })
      .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
