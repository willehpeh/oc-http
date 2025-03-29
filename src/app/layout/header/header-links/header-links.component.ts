import { Component } from '@angular/core';

@Component({
  selector: 'app-header-links',
  imports: [],
  template: `
		<nav>
			<a href="#" class="active">Properties</a>
			<a href="#">About</a>
			<a href="#">Contact</a>
		</nav>
  `,
  styles: `
    nav {
      display: flex;
      gap: 2rem;
    }

    a {
      color: var(--on-surface);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
    }

    a:hover,
    a.active {
      color: var(--primary);
    }
  `
})
export class HeaderLinksComponent {

}
