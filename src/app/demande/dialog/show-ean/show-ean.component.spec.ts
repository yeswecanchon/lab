import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEanComponent } from './show-ean.component';

describe('ShowEanComponent', () => {
  let component: ShowEanComponent;
  let fixture: ComponentFixture<ShowEanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
