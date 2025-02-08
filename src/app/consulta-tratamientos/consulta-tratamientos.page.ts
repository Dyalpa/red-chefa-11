import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-consulta-tratamientos',
  templateUrl: './consulta-tratamientos.page.html',
  styleUrls: ['./consulta-tratamientos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ConsultaTratamientosPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  navigateTo(page: string) {
    this.router.navigateByUrl(`/${page}`);
  }

}
