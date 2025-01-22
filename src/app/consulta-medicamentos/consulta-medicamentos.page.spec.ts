import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultaMedicamentosPage } from './consulta-medicamentos.page';

describe('ConsultaMedicamentosPage', () => {
  let component: ConsultaMedicamentosPage;
  let fixture: ComponentFixture<ConsultaMedicamentosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaMedicamentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
