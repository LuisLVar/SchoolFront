import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudAspectoComponent } from './crud-aspecto.component';

describe('CrudAspectoComponent', () => {
  let component: CrudAspectoComponent;
  let fixture: ComponentFixture<CrudAspectoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudAspectoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudAspectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
