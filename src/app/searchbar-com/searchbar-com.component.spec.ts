import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchbarComComponent } from './searchbar-com.component';

describe('SearchbarComComponent', () => {
  let component: SearchbarComComponent;
  let fixture: ComponentFixture<SearchbarComComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchbarComComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchbarComComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
