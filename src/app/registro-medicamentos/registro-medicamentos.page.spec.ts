import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroMedicamentosPage } from './registro-medicamentos.page';

describe('RegistroMedicamentosPage', () => {
  let component: RegistroMedicamentosPage;
  let fixture: ComponentFixture<RegistroMedicamentosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroMedicamentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
