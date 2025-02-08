import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroTratamientosPage } from './registro-tratamientos.page';

describe('RegistroTratamientosPage', () => {
  let component: RegistroTratamientosPage;
  let fixture: ComponentFixture<RegistroTratamientosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroTratamientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
