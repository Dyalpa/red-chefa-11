import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultarNovedadesPage } from './consultar-novedades.page';

describe('ConsultarNovedadesPage', () => {
  let component: ConsultarNovedadesPage;
  let fixture: ComponentFixture<ConsultarNovedadesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultarNovedadesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
