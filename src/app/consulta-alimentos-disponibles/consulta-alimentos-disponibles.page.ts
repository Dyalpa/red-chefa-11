import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-alimentos-disponibles',
  templateUrl: './consulta-alimentos-disponibles.page.html',
  styleUrls: ['./consulta-alimentos-disponibles.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ConsultaAlimentosDisponiblesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigateTo(page: string){
    this.router.navigateByUrl(`/${page}`);
  }

}
