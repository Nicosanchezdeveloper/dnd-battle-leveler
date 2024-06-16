import { Component } from '@angular/core';

@Component({
  selector: 'app-enemies-list',
  templateUrl: './enemies-list.component.html',
  styleUrl: './enemies-list.component.scss'
})
export class EnemiesListComponent {
  title = 'Selection of Enemies';
  enemy = {
    "name": "CABALLO DE GUERRA ESQUELETO",
    "category": "Monstruo",
    "challenge": "1/2 (100 PX)",
    "image": "assets/img/CABALLO_DE_GUERRA_ESQUELETO.jpeg"
  }
}
