/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { DebugElement } from '@angular/core'

import { DemandeTabsComponent } from './tabs.component'

describe('DemandeTabsComponent', () => {
  let component: DemandeTabsComponent
  let fixture: ComponentFixture<DemandeTabsComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeTabsComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeTabsComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
