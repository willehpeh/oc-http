import { Component } from '@angular/core';
import { HeaderLinksComponent } from './header-links/header-links.component';

@Component({
  selector: 'app-header',
  imports: [
    HeaderLinksComponent
  ],
  template: `
		<header class="header">
			<div class="header-content">
				<a href="/" class="header-brand">
					<svg class="header-logo" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M16 2L2 10L16 18L30 10L16 2Z" fill="#BB86FC"/>
						<path d="M16 20L2 12V26L16 30L30 26V12L16 20Z" fill="#03DAC6"/>
					</svg>
					<div class="header-title">
						<h1>Dwelio</h1>
						<span class="tagline">Your Home, Simplified</span>
					</div>
				</a>
				<app-header-links/>
			</div>
		</header>
  `,
  styles: `
    .header {
      background-color: var(--surface);
      padding: 1.5rem 0;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    }

    .header-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .header-brand {
      display: flex;
      align-items: center;
      gap: 1rem;
      text-decoration: none;
    }

    .header-logo {
      width: 32px;
      height: 32px;
    }

    .header-title {
      display: flex;
      flex-direction: column;
    }

    h1 {
      font-size: 1.5rem;
      color: var(--primary);
      line-height: 1.2;
    }

    .tagline {
      font-size: 0.875rem;
      color: var(--on-surface);
      font-weight: 400;
    }
  `
})
export class HeaderComponent {

}
