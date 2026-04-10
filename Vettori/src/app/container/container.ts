import { Component } from '@angular/core';
import { Macchina } from '../macchina/macchina';

@Component({
  selector: 'app-container',
  imports: [Macchina],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {
  readonly macchineDaCantiere: string[] = [
    'Escavatore',
    'Pala gommata',
    'Autobetoniera',
    'Rullo compressore',
    'Gru a torre',
    'Minipala',
    'Betoniera',
    'Dump truck',
    'Sollevatore telescopico',
    'Bobcat',
  ];
}
