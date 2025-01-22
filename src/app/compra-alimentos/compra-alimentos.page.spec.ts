import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompraAlimentosPage } from './compra-alimentos.page';

describe('CompraAlimentosPage', () => {
  let component: CompraAlimentosPage;
  let fixture: ComponentFixture<CompraAlimentosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CompraAlimentosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
