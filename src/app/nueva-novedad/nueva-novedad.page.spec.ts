import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevaNovedadPage } from './nueva-novedad.page';

describe('NuevaNovedadPage', () => {
  let component: NuevaNovedadPage;
  let fixture: ComponentFixture<NuevaNovedadPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaNovedadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
