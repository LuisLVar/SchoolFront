import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloDirectorComponent } from './modulo-director.component';

describe('ModuloDirectorComponent', () => {
  let component: ModuloDirectorComponent;
  let fixture: ComponentFixture<ModuloDirectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuloDirectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuloDirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
