import { AnimationBuilder, animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostBinding, Renderer2, ViewChild, inject } from '@angular/core';
import { LetterComponent } from '../letter/letter.component';
import { CommonModule } from '@angular/common';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-envelope',
  standalone: true,
  imports: [CommonModule, LetterComponent],
  templateUrl: './envelope.component.html',
  styleUrl: './envelope.component.scss',
})
export class EnvelopeComponent {
  renderer = inject(Renderer2);
  emailService = inject(EmailService);
  @ViewChild('wrapper') envelope!: ElementRef;
  @ViewChild('emailInput') inputRef!: ElementRef<HTMLInputElement>;
  flap: boolean = false;

  toggleFlap() {
    if (!this.emailService.isValid(this.inputRef.nativeElement.value)) return;
    if (this.flap) {
      this.renderer.removeClass(this.envelope.nativeElement, 'flap');
    } else {
      this.renderer.addClass(this.envelope.nativeElement, 'flap');
    }
    this.flap = !this.flap;
  }
}