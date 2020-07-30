import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudGradoComponent } from './crud-grado.component';

describe('CrudGradoComponent', () => {
  let component: CrudGradoComponent;
  let fixture: ComponentFixture<CrudGradoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudGradoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudGradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
