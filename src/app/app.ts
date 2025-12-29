import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PortfolioService } from './core/services/portfolio.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <app-navbar />
    <main class="min-h-screen">
      <router-outlet />
    </main>
    <app-footer />
  `,
  styles: []
})
export class App implements OnInit {
  private portfolioService = inject(PortfolioService);

  ngOnInit(): void {
    this.portfolioService.initTheme();
  }
}
