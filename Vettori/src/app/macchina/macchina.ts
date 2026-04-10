import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-macchina',
  imports: [CommonModule],
  templateUrl: './macchina.html',
  styleUrl: './macchina.css',
})
export class Macchina {
  @Input() nomeMacchina = '';

  readonly pezziMacchina: string[] = [
    'Motore diesel',
    'Cabina operatore',
    'Braccio meccanico',
    'Impianto idraulico',
    'Cingoli o pneumatici',
  ];
}
