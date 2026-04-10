import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Macchina } from '../macchina/macchina';

@Component({
  selector: 'app-container',
  imports: [CommonModule, Macchina],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {
  readonly macchineDaCantiere: string[] = [
    'Escavatore cingolato',
    'Pala gommata',
    'Autobetoniera',
    'Rullo compattatore',
    'Gru a torre',
    'Miniescavatore',
    'Dumper',
    'Sollevatore telescopico',
    'Fresatrice stradale',
    'Perforatrice idraulica',
  ];
}
