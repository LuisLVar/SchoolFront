import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloInscripcionComponent } from './modulo-inscripcion.component';

describe('ModuloInscripcionComponent', () => {
  let component: ModuloInscripcionComponent;
  let fixture: ComponentFixture<ModuloInscripcionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloInscripcionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloInscripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
