import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-medicamentos',
  templateUrl: './registro-medicamentos.page.html',
  styleUrls: ['./registro-medicamentos.page.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class RegistroMedicamentosPage implements OnInit {
  @ViewChild('medicamentoForm')
  medicamentoForm!: NgForm;
  
  nombre: string = '';
  especialidad: string = '';
  presentacion: string = '';
  cantidad: number | null = null;
  dosis: number | null = null;
  frecuencia: number | null = null;
  fechaEntrega: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {}

  async registrarMedicamento() {
    const medicamento = {
      nombre: this.nombre,
      presentacion: this.presentacion,
      cantidad: this.cantidad,
      fecha_entrega: this.fechaEntrega,
      dosis: this.dosis !== null ? +this.dosis : null, // Convertir a número explícitamente
      frecuencia: this.frecuencia !== null ? +this.frecuencia : null, // Convertir a número explícitamente
      especialidad: this.especialidad
    };

    console.log('Datos a enviar:', medicamento);

    try {
      const result = await firstValueFrom(this.apiService.addMedicamento(medicamento));
      console.log('Medicamento registrado exitosamente', result);

      // Limpiar los campos del formulario
      this.medicamentoForm.resetForm();
      
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error registrando el medicamento:', error.message);
        alert('Error registrando el medicamento: ' + error.message);
      } else {
        console.error('Error desconocido registrando el medicamento');
        alert('Error desconocido registrando el medicamento');
      }
    }
  }

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }
}




