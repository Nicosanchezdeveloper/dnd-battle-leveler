import { Component } from '@angular/core';
import { Enemy } from './Enemy';

@Component({
  selector: 'app-enemies-list',
  templateUrl: './enemies-list.component.html',
  styleUrl: './enemies-list.component.scss'
})

export class EnemiesListComponent {
  title = 'Selection of Enemies';
  enemies: Enemy[] = [{
    "name": "CABALLO DE GUERRA ESQUELETO",
    "category": "Monstruo",
    "challenge": "1/2 (100 PX)",
    "image": "assets/img/CABALLO_DE_GUERRA_ESQUELETO.jpeg"
  },
  {
    "name": "ESPECTRO",
    "category": "Monstruo",
    "challenge": "1 (200 PX)",
    "image": "assets/img/ESPECTRO.jpeg"
  },
  {
    "name": "SOMBRA",
    "category": "Monstruo",
    "challenge": "1/2 (100 PX)",
    "image": "assets/img/SOMBRA.jpeg"
  },
  {
    "name": "NECRÓFAGO (GUL)",
    "category": "Monstruo",
    "challenge": "1 (200 PX)",
    "image": "assets/img/NECROFAGO.jpeg"
  }
]
}
