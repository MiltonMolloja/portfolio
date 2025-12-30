import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { PortfolioService } from './core/services/portfolio.service';
import { SeoService } from './core/services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
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
  private readonly portfolioService = inject(PortfolioService);
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.portfolioService.initTheme();
    this.seoService.init();
  }
}
