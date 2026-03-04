import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Nav } from './nav/nav';
import { Hero } from './hero/hero';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nav, Hero],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
