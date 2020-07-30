import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudPersonalComponent } from './crud-personal.component';

describe('CrudPersonalComponent', () => {
  let component: CrudPersonalComponent;
  let fixture: ComponentFixture<CrudPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
