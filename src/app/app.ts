import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly navLinks = [
    { label: 'About us', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Use Cases', path: '/use-cases' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'Blog', path: '/blog' },
  ];

  protected readonly currentYear = new Date().getFullYear();
}
