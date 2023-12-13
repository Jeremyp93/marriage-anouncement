import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-letter',
  standalone: true,
  imports: [],
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.scss',
  animations: [
    trigger('flapAnimation', [
      state('flap', style({
        bottom: '100px',
        transform: 'scale(1.5)',
        ['transition-delay']: '1s',
      })),
    ]),
  ],
})
export class LetterComponent {
  @Input() envelopeState: string = '';
}
