/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { PreferencesComponent } from './preferences.component'
import { MaterialModule } from '@angular/material'
import { FormsModule } from '@angular/forms'

describe('PreferencesComponent', () => {
  let component: PreferencesComponent
  let fixture: ComponentFixture<PreferencesComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        FormsModule
      ],
      declarations: [ PreferencesComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(PreferencesComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
