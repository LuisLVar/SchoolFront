import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudSeccionComponent } from './crud-seccion.component';

describe('CrudSeccionComponent', () => {
  let component: CrudSeccionComponent;
  let fixture: ComponentFixture<CrudSeccionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudSeccionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudSeccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
