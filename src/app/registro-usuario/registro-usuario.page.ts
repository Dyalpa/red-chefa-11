import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton]
})
export class RegistroUsuarioPage {
  nombre: string = '';
  correo: string = '';
  clave: string = '';
  tipo_usuario: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  register() {
    const usuario = {
      nombre: this.nombre,
      correo: this.correo,
      clave: this.clave,
      tipo_usuario: this.tipo_usuario
    };

    this.authService.register(usuario).subscribe(
      response => {
        console.log('Registro exitoso', response);

        // Redirigir al inicio de sesión o página principal
        this.router.navigate(['/login']);
      },
      error => {
        console.error('Error al registrar', error);
      }
    );
  }
}

