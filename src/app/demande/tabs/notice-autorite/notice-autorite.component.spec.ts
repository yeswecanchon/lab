import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeAutoriteComponent } from './notice-autorite.component';

describe('NoticeAutoriteComponent', () => {
  let component: NoticeAutoriteComponent;
  let fixture: ComponentFixture<NoticeAutoriteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeAutoriteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeAutoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
