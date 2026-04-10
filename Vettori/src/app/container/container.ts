import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  imports: [],
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
