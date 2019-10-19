import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleComComponent } from './people-com.component';

describe('PeopleComComponent', () => {
  let component: PeopleComComponent;
  let fixture: ComponentFixture<PeopleComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
