import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-consultar-cita',
  templateUrl: './consultar-cita.page.html',
  styleUrls: ['./consultar-cita.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ConsultarCitaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
