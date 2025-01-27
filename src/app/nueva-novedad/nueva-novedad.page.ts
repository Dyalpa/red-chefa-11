import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonGrid, IonCol, IonRow, IonCardTitle, IonCardHeader, IonCardContent, IonButton, IonInput, IonLabel, IonItem } from '@ionic/angular/standalone';
import { ApiService } from '../services/api.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nueva-novedad',
  templateUrl: './nueva-novedad.page.html',
  styleUrls: ['./nueva-novedad.page.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonGrid, IonCol, IonRow, IonCardTitle, IonCardHeader, IonCardContent, IonButton, IonInput, IonLabel, IonItem]
})
export class NuevaNovedadPage implements OnInit {
  @ViewChild('novedadForm')
  novedadForm!: NgForm;

  tipoNovedad: string = '';
  prioridad: string = '';
  descripcion: string = ''; 
  fecha: string = ''; // Definición de propiedad para evitar errores de compilación
  hora: string = '';  // Definición de propiedad para evitar errores de compilación

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {
    this.setDefaultDateTime();
  }

  setDefaultDateTime() {
    const currentDate = new Date();
    this.fecha = currentDate.toISOString().split('T')[0];
    this.hora = currentDate.toTimeString().split(' ')[0];
  }

  async registrarNovedad() {
    const novedad = {
      tipo_de_novedad: this.tipoNovedad,
      prioridad: this.prioridad,
      fecha: this.fecha,
      hora: this.hora,
      descripcion: this.descripcion,
    };

    console.log('Datos a enviar:', novedad);

    try {
      const result = await firstValueFrom(this.apiService.addNovedades(novedad));
      console.log('Novedad registrada exitosamente', result);

      // Limpiar los campos del formulario
      this.novedadForm.resetForm();
      this.setDefaultDateTime(); // Restablecer la fecha y hora predeterminadas después del envío

    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error registrando la novedad:', error.message);
        alert('Error registrando la novedad: ' + error.message);
      } else {
        console.error('Error desconocido registrando la novedad');
        alert('Error desconocido registrando la novedad');
      }
    }
  }

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }
}





