/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { DemandeListSearchComponent } from './search.component'

describe('DemandeListSearchComponent', () => {
  let component: DemandeListSearchComponent
  let fixture: ComponentFixture<DemandeListSearchComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeListSearchComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeListSearchComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
