import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditStatutComponent } from './edit-statut.component';

describe('EditStatutComponent', () => {
  let component: EditStatutComponent;
  let fixture: ComponentFixture<EditStatutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditStatutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditStatutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
