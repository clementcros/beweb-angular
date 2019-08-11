import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSaveComponent } from './movie-save.component';

describe('MovieSaveComponent', () => {
  let component: MovieSaveComponent;
  let fixture: ComponentFixture<MovieSaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSaveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
