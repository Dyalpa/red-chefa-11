import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonGrid, IonCol, IonRow, IonCardTitle, IonCardHeader, IonCardContent } from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alimentos',
  templateUrl: './alimentos.page.html',
  styleUrls: ['./alimentos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonCard, IonGrid, IonCol, IonRow, IonCardTitle, IonCardHeader, IonCardContent]
})
export class AlimentosPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {}

  navigateTo(page: string) {
    this.router.navigateByUrl(`/${page}`);
  }
}