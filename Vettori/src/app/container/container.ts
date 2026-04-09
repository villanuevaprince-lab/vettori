import { Component } from '@angular/core';

@Component({
  selector: 'app-container',
  imports: [],
  templateUrl: './container.html',
  styleUrl: './container.css',
})
export class Container {
  macchineDaCantiere: string[] = [
    'Escavatore cingolato',
    'Pala gommata',
    'Minipala',
    'Bulldozer',
    'Rullo compattatore',
    'Autogru',
    'Dumper',
    'Betoniera',
    'Terna',
    'Livellatrice',
  ];
}
