import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-consulta-tratamientos',
  templateUrl: './consulta-tratamientos.page.html',
  styleUrls: ['./consulta-tratamientos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ConsultaTratamientosPage implements OnInit {
  tratamientos: any[] = [];
  medicamentos: any[] = [];

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit() {
    this.loadTratamientos();
    this.loadMedicamentos();
  }

  loadTratamientos() {
    this.apiService.getTratamientos().subscribe(
      (data: any[]) => {
        this.tratamientos = data;
        console.log('Tratamientos:', this.tratamientos); // Registro para depuración
        this.matchMedicamentos();
      },
      error => console.error('Error al obtener tratamientos:', error)
    );
  }

  loadMedicamentos() {
    this.apiService.getAllMedicamentos().subscribe(
      (data: any[]) => {
        this.medicamentos = data;
        console.log('Medicamentos:', this.medicamentos); // Registro para depuración
        this.matchMedicamentos();
      },
      error => console.error('Error al obtener medicamentos:', error)
    );
  }

  matchMedicamentos() {
    if (this.tratamientos.length && this.medicamentos.length) {
      this.tratamientos.forEach(tratamiento => {
        const medicamento = this.medicamentos.find(m => m.medicamento_id === tratamiento.medicamento_id);
        if (medicamento) {
          tratamiento.medicamento = `${medicamento.nombre} (${medicamento.presentacion})`;
          console.log('Tratamiento actualizado:', tratamiento); // Registro para depuración
        } else {
          console.error('No se encontró el medicamento para id:', tratamiento.medicamento_id); // Registro para error
        }
      });
      console.log('Tratamientos con nombres y presentaciones:', this.tratamientos); // Registro para depuración
    }
  }

  navigateTo(page: string) {
    this.router.navigateByUrl(`/${page}`);
  }
}