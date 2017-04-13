import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelDemandeComponent } from './cancel-demande.component';

describe('CancelDemandeComponent', () => {
  let component: CancelDemandeComponent;
  let fixture: ComponentFixture<CancelDemandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CancelDemandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CancelDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
