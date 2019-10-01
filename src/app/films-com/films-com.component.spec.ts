import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsComComponent } from './films-com.component';

describe('FilmsComComponent', () => {
  let component: FilmsComComponent;
  let fixture: ComponentFixture<FilmsComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmsComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmsComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
