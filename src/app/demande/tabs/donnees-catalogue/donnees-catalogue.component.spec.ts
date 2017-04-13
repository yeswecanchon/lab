import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonneesCatalogueComponent } from './donnees-catalogue.component';

describe('DonneesCatalogueComponent', () => {
  let component: DonneesCatalogueComponent;
  let fixture: ComponentFixture<DonneesCatalogueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonneesCatalogueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonneesCatalogueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
