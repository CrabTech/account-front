import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAgenciaComponent } from './edit-agencia.component';

describe('EditAgenciaComponent', () => {
  let component: EditAgenciaComponent;
  let fixture: ComponentFixture<EditAgenciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditAgenciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAgenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
