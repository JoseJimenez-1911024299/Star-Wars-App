import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsItemComponent } from './films-item.component';

describe('FilmsItemComponent', () => {
  let component: FilmsItemComponent;
  let fixture: ComponentFixture<FilmsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
