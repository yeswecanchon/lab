import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditNnaComponent } from './edit-nna.component';

describe('EditNnaComponent', () => {
  let component: EditNnaComponent;
  let fixture: ComponentFixture<EditNnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditNnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditNnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
