import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarCitaPage } from './registrar-cita.page';

describe('RegistrarCitaPage', () => {
  let component: RegistrarCitaPage;
  let fixture: ComponentFixture<RegistrarCitaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarCitaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
