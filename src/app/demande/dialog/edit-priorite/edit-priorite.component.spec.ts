import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPrioriteComponent } from './edit-priorite.component';

describe('EditPrioriteComponent', () => {
  let component: EditPrioriteComponent;
  let fixture: ComponentFixture<EditPrioriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPrioriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPrioriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
