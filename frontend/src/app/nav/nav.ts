import { Component, signal, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  protected menuOpen = signal(false);
  protected scrolled = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update(open => !open);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.menuOpen.set(false);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    // set scrolled based on window.scrollY
    if (typeof window !== 'undefined') {
      this.scrolled.set(window.scrollY > 0);
    }
  }
}
