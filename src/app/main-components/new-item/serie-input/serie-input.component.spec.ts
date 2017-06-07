import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieInputComponent } from './serie-input.component';

describe('SerieInputComponent', () => {
  let component: SerieInputComponent;
  let fixture: ComponentFixture<SerieInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
