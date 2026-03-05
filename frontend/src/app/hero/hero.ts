import { Component, DestroyRef, afterNextRender, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-hero',
  imports: [FormsModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  private readonly destroyRef = inject(DestroyRef);

  protected readonly products = [
    { src: 'images/box-orange-rush.jpg',  alt: 'WAYS® Orange Rush — box of 10 sachets' },
    { src: 'images/box-cherry-lime.png',  alt: 'WAYS® Chill Cherry Lime — box of 10 sachets' },
  ];

  protected currentIndex = signal(0);

  constructor() {
    afterNextRender(() => {
      const id = setInterval(() => {
        this.currentIndex.update(i => (i + 1) % this.products.length);
      }, 4000);

      this.destroyRef.onDestroy(() => clearInterval(id));
    });
  }

  protected readonly benefits = [
    { icon: '⚡', label: 'Fast hydration',    body: 'Absorbed 3× faster than water alone', pos: 'tl' },
    { icon: '🌿', label: 'Clean ingredients', body: 'No sugar, no artificial flavours',     pos: 'tr' },
    { icon: '💧', label: 'Mineral-rich',      body: 'Sodium, potassium, magnesium & more',  pos: 'bl' },
    { icon: '🎒', label: 'Go anywhere',       body: 'One sachet fits your pocket or bag',   pos: 'br' },
  ];

  protected email = '';
  protected submitted = signal(false);

  protected onSubmit(): void {
    this.submitted.set(true);
    console.log(this.email);
  }
}
