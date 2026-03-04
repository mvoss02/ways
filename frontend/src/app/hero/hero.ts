import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  protected readonly benefits = [
    { icon: '⚡', label: 'Fast hydration',    body: 'Absorbed 3× faster than water alone', pos: 'tl' },
    { icon: '🌿', label: 'Clean ingredients', body: 'No sugar, no artificial flavours',     pos: 'tr' },
    { icon: '💧', label: 'Mineral-rich',      body: 'Sodium, potassium, magnesium & more',  pos: 'bl' },
    { icon: '🎒', label: 'Go anywhere',       body: 'One sachet fits your pocket or bag',   pos: 'br' },
  ];

  protected email = signal('');
  protected submitted = signal(false);

  protected onEmailInput(event: Event): void {
    this.email.set((event.target as HTMLInputElement).value);
  }

  protected onSubmit(): void {
    if (this.email().includes('@')) {
      this.submitted.set(true);
    }
  }
}
