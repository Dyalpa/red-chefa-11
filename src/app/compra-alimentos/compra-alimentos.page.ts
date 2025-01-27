import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonGrid, IonCol, IonRow, IonCardTitle, IonCardHeader, IonCardContent, IonButton, IonInput, IonLabel, IonItem } from '@ionic/angular/standalone';
import { ApiService } from '../services/api.service';
import { firstValueFrom } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra-alimentos',
  templateUrl: './compra-alimentos.page.html',
  styleUrls: ['./compra-alimentos.page.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,  
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonGrid, IonCol, IonRow, IonCardTitle, IonCardHeader, IonCardContent, IonButton, IonInput, IonLabel, IonItem]
})
export class CompraAlimentosPage implements OnInit {
  @ViewChild('alimentoForm')
    alimentoForm!: NgForm;

  articulo: string = '';
  presentacion: string = '';
  cantidad: number | null = null;
  fechaCompra: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit() {}

  async registrarAlimento() {
    const alimento = {
      nombre: this.articulo,
      presentacion: this.presentacion,
      cantidad: this.cantidad,
      fecha_compra: this.fechaCompra,
    };

    console.log('Datos a enviar:', alimento);

    try {
          const result = await firstValueFrom(this.apiService.addAlimento(alimento));
          console.log('Artículo registrado exitosamente', result);
    
          // Limpiar los campos del formulario
          this.alimentoForm.resetForm();
    
        }catch (error: unknown) {
        if (error instanceof Error) {
        console.error('Error registrando el artículo:', error.message);
        alert('Error registrando el artículo: ' + error.message);
      } else {
        console.error('Error desconocido registrando el artículo');
        alert('Error desconocido registrando el artículo');
      }
    }
  }

  navigateTo(page: string) {
    this.router.navigate([`/${page}`]);
  }
}





