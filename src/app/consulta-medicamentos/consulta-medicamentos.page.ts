import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton, IonCard, IonCardHeader, IonCardContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-consulta-medicamentos',
  templateUrl: './consulta-medicamentos.page.html',
  styleUrls: ['./consulta-medicamentos.page.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonRow, IonCol, IonButton, IonCard, IonCardHeader, IonCardContent]
})
export class ConsultaMedicamentosPage implements OnInit {
  filtros: any = {};
  medicamentos: any[] = [];
  todosMedicamentos: any[] = [];
  nombres: string[] = [];
  presentaciones: string[] = [];
  especialistas: string[] = [];
  fechasEntrega: string[] = [];
  filtroSeleccionado: any = null;

  constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    this.loadFilterOptions();
    this.loadMedicamentos();
  }

  loadMedicamentos() {
    this.apiService.getAllMedicamentos().subscribe(
      (data: any[]) => {
        this.todosMedicamentos = data;
        this.medicamentos = data; // Inicialmente mostrar todos los medicamentos
      },
      error => console.error('Error al obtener medicamentos:', error)
    );
  }

  loadFilterOptions() {
    this.apiService.getNombres().subscribe(
      (data: any[]) => this.nombres = data,
      error => console.error('Error al obtener nombres:', error)
    );
    this.apiService.getPresentaciones().subscribe(
      (data: any[]) => this.presentaciones = data,
      error => console.error('Error al obtener presentaciones:', error)
    );
    this.apiService.getEspecialistas().subscribe(
      (data: any[]) => this.especialistas = data,
      error => console.error('Error al obtener especialistas:', error)
    );
    this.apiService.getFechasEntrega().subscribe(
      (data: any[]) => this.fechasEntrega = data,
      error => console.error('Error al obtener fechas de entrega:', error)
    );
  }

  aplicarFiltros() {
    this.medicamentos = this.todosMedicamentos.filter(medicamento => {
      return (!this.filtros.nombre || medicamento.nombre.includes(this.filtros.nombre)) &&
             (!this.filtros.presentacion || medicamento.presentacion.includes(this.filtros.presentacion)) &&
             (!this.filtros.especialista || medicamento.especialista.includes(this.filtros.especialista)) &&
             (!this.filtros.fecha_entrega || medicamento.fecha_entrega === this.filtros.fecha_entrega);
    });
  }

  mostrarLista(filtro: string) {
    this.filtroSeleccionado = this.filtroSeleccionado === filtro ? null : filtro;
  }

  seleccionarFiltro(filtro: string, valor: string) {
    this.filtros = {}; // Reinicia los filtros
    this.filtros[filtro] = valor;
    console.log('Filtro aplicado:', this.filtros); // Verifica el filtro seleccionado
    this.aplicarFiltros();
    this.filtroSeleccionado = null; // Oculta la lista después de seleccionar un filtro
  }

  navigateTo(page: string) {
    this.router.navigateByUrl(`/${page}`);
  }
}



