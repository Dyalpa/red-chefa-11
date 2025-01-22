import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultarCitaPage } from './consultar-cita.page';

describe('ConsultarCitaPage', () => {
  let component: ConsultarCitaPage;
  let fixture: ComponentFixture<ConsultarCitaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarCitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
