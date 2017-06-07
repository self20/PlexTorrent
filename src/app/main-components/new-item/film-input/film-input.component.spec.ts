import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmInputComponent } from './film-input.component';

describe('FilmInputComponent', () => {
  let component: FilmInputComponent;
  let fixture: ComponentFixture<FilmInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
