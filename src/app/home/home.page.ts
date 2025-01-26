import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonButtons, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonGrid, IonCol, IonRow, IonCardTitle, IonCardHeader, IonCardContent } from '@ionic/angular/standalone';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  imports: [IonButtons, IonButton, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonGrid, IonCol, IonRow, IonCardTitle, IonCardHeader, IonCardContent],
})
export class HomePage implements OnInit {
  username: string = ''; // Inicializar la variable con una cadena vacía
  userId: string = '';

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {
    // Cargar la información del usuario al iniciar la página
    this.loadUserInfo();
  }

  ionViewWillEnter() {
    // Cargar la información del usuario cada vez que la vista entre en primer plano
    this.loadUserInfo();
  }

  loadUserInfo() {
    this.userId = localStorage.getItem('userId') || '';
    console.log('User ID from localStorage:', this.userId); // Verificar que el ID se obtiene correctamente

    if (this.userId) {
      this.apiService.getUserInfo(this.userId).subscribe({
        next: (user) => {
          this.username = user.nombre;
          console.log('User Name from API:', this.username); // Verificar que el nombre se asigna correctamente
        },
        error: (error) => {
          console.error('Error al obtener la información del usuario:', error);
        }
      });
    } else {
      console.error('No userId found in localStorage');
    }
  }

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }

  logout() {
    this.apiService.logout().subscribe({
      next: () => {
        // Limpiar datos del lado del cliente
        localStorage.clear();
        sessionStorage.clear();
        // Reiniciar variables de usuario
        this.username = '';
        this.userId = '';
        // Redirigir a la página de inicio de sesión
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Error al cerrar sesión:', error);
      }
    });
  }
}





