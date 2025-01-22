import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-consulta-medicamentos',
  templateUrl: './consulta-medicamentos.page.html',
  styleUrls: ['./consulta-medicamentos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ConsultaMedicamentosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
