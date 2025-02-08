import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ApiService } from '../services/api.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro-tratamientos',
  templateUrl: './registro-tratamientos.page.html',
  styleUrls: ['./registro-tratamientos.page.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegistroTratamientosPage implements OnInit {
  @ViewChild('tratamientoForm')
  tratamientoForm!: NgForm;

  medicamento: string = '';
  medicamento_id: number | null = null; // ID del medicamento como número
  usuario: string = '';
  usuario_id: string = ''; // ID del usuario
  dosis: number | null = null;
  horaAdministracion: string = '';
  frecuencia: number | null = null;
  medicamentos: any[] = []; // Array para almacenar los medicamentos

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.loadUserInfo();
    this.loadMedicamentos(); // Cargar los medicamentos al iniciar
  }

  ionViewWillEnter() {
    this.loadUserInfo();
  }

  async loadUserInfo() {
    const userId = localStorage.getItem('userId') || '';
    console.log('User ID from localStorage:', userId);

    if (userId) {
      try {
        const user = await firstValueFrom(this.apiService.getUserInfo(userId));
        this.usuario = user.nombre;
        this.usuario_id = user.usuario_id; // Asignar el ID del usuario
        console.log('Usuario cargado:', user); // Log completo del usuario
      } catch (error) {
        console.error('Error al obtener la información del usuario:', error);
      }
    } else {
      console.error('No userId found in localStorage');
    }
  }

  async loadMedicamentos() {
    try {
      this.medicamentos = await firstValueFrom(this.apiService.getAllMedicamentos());
      console.log('Medicamentos cargados:', this.medicamentos);
    } catch (error) {
      console.error('Error al cargar los medicamentos:', error);
    }
  }

  async registrarTratamiento() {
    if (!this.medicamento_id || typeof this.medicamento_id !== 'number') {
      console.error('Error: medicamento_id no definido o no es un número');
      alert('Por favor, selecciona un medicamento válido.');
      return;
    }

    if (!this.usuario_id) {
      console.error('Error: usuario_id no definido');
      alert('Por favor, asegúrate de que el usuario esté cargado correctamente.');
      return;
    }

    if (!this.horaAdministracion) {
      console.error('Error: horaAdministracion no definida');
      alert('Por favor, ingresa una hora de administración válida.');
      return;
    }

    const [hour, minute] = this.horaAdministracion.split(':');
    const formattedHora = `${hour}:${minute}:00`;

    const tratamiento = {
      medicamento_id: +this.medicamento_id,
      usuario_id: this.usuario_id,
      dosis: this.dosis !== null ? +this.dosis : null,
      frecuencia: this.frecuencia !== null ? +this.frecuencia : null,
      hora_administracion: formattedHora,
    };

    console.log('Datos a enviar:', tratamiento);

    try {
      const result = await firstValueFrom(this.apiService.addTratamientos(tratamiento));
      console.log('Tratamiento registrado exitosamente', result);
      this.tratamientoForm.resetForm(); // Limpiar el formulario después del registro exitoso
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error registrando el tratamiento:', error.message);
        alert('Error registrando el tratamiento: ' + error.message);
      } else {
        console.error('Error desconocido registrando el tratamiento');
        alert('Error desconocido registrando el tratamiento');
      }
    }
  }

  clearForm() {
    this.tratamientoForm.resetForm();
  }

  navigateTo(page: string) {
    this.clearForm(); // Limpiar el formulario antes de navegar
    this.router.navigateByUrl(`/${page}`);
  }
}





