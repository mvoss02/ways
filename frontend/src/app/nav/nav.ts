import { Component, signal, HostListener } from '@angular/core';

@Component({
  selector: 'app-nav',
  imports: [],
  templateUrl: './nav.html',
  styleUrl: './nav.css',
})
export class Nav {
  protected menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update(open => !open);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.menuOpen.set(false);
  }
}
