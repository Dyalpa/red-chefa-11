import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonGrid, IonCol, IonRow, IonCardTitle, IonCardHeader, IonCardContent, IonButton, IonInput, IonLabel, IonItem } from '@ionic/angular/standalone';
import { AlertController } from '@ionic/angular'; // Importar AlertController correctamente

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true, 
  imports: [CommonModule, FormsModule, IonContent, IonHeader, IonTitle, IonToolbar, IonCard, IonGrid, IonCol, IonRow, IonCardTitle, IonCardHeader, IonCardContent, IonButton, IonInput, IonLabel, IonItem]
})

export class LoginPage {
  correo: string = '';
  clave: string = '';

  constructor(private authService: AuthService, private router: Router, private alertController: AlertController) {}

  async login() {
    if (!this.correo || !this.clave) {
      const alert = await this.alertController.create({
        header: 'Error',
        message: 'Por favor, completa todos los campos.',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }

    this.authService.login(this.correo, this.clave).subscribe(
      response => {
        console.log('Inicio de sesión exitoso', response);
        localStorage.setItem('token', response.token); // Almacenar el token
        this.router.navigate(['/home']); // Redirigir a la pantalla principal
      },
      async error => {
        const alert = await this.alertController.create({
          header: 'Error',
          message: 'Usuario o clave inválidos.',
          buttons: ['OK']
        });
        await alert.present();
        console.error('Error al iniciar sesión', error);
      }
    );
  }

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }

}


