import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular'; // Importar AlertController correctamente


@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonCardContent, IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonGrid, IonRow, IonCol]
})
export class RegistroUsuarioPage {
  nombre: string = '';
  correo: string = '';
  clave: string = '';
  confirmacionClave: string = '';
  tipo_usuario: string = '';

  constructor(private authService: AuthService, private router: Router, private alertController: AlertController) {}

  async register() {
    if (!this.nombre || !this.correo || !this.clave || !this.tipo_usuario){
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, completa todos los campos.',
        buttons: ['OK']
      })
      await alert.present();
      return;
    }

    if (this.clave != this.confirmacionClave){
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Las contraseñas no coinsiden.',
        buttons: ['OK']
      })
      await alert.present();
      return;
    }

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
      async error => {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Error al registrar. Inténtalo de nuevo.',
          buttons: ['OK']
        });
        await alert.present();
        console.error('Error al registrar', error);
      }
    );
  }

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }
}

