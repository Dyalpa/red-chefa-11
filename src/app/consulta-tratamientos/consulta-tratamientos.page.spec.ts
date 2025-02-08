import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ConsultaTratamientosPage } from './consulta-tratamientos.page';

describe('ConsultaTratamientosPage', () => {
  let component: ConsultaTratamientosPage;
  let fixture: ComponentFixture<ConsultaTratamientosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaTratamientosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
