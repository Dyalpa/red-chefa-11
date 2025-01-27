import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonGrid, IonCol, IonRow, IonCardTitle, IonCardHeader, IonCardContent, IonButton, IonInput, IonLabel, IonItem } from '@ionic/angular/standalone';
import { ApiService } from '../services/api.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registrar-cita',
  templateUrl: './registrar-cita.page.html',
  styleUrls: ['./registrar-cita.page.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonGrid, IonCol, IonRow, IonCardTitle, IonCardHeader, IonCardContent, IonButton, IonInput, IonLabel, IonItem]
})
export class RegistrarCitaPage implements OnInit {
  @ViewChild('citaForm')
    citaForm!: NgForm;

  especialista: string = '';
  fecha: string = '';
  hora: string = '';
  observacion: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {}

  async registrarCita() {
    const [hour, minute] = this.hora.split(':');
    const formattedHora = `${hour}:${minute}:00`;

    const cita = {
      especialista: this.especialista,
      fecha: this.fecha,
      hora: formattedHora,
      observacion: this.observacion,
    };

    console.log('Datos a enviar:', cita);

    try {
      const result = await firstValueFrom(this.apiService.addCitas(cita));
      console.log('Cita registrada exitosamente', result);

      // Limpiar los campos del formulario
      this.citaForm.resetForm();

    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error('Error registrando la cita:', error.message);
        alert('Error registrando la cita: ' + error.message);
      } else {
        console.error('Error desconocido registrando la cita');
        alert('Error desconocido registrando la cita');
      }
    }
  }

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }
}

