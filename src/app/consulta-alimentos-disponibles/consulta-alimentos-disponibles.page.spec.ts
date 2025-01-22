import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultaAlimentosDisponiblesPage } from './consulta-alimentos-disponibles.page';

describe('ConsultaAlimentosDisponiblesPage', () => {
  let component: ConsultaAlimentosDisponiblesPage;
  let fixture: ComponentFixture<ConsultaAlimentosDisponiblesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaAlimentosDisponiblesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
