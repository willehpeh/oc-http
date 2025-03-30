import { Component, inject, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-button',
  imports: [],
  template: `
		<a (click)="onGoBack()" class="back-button" aria-label="Back to properties">
			<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" fill="currentColor"/>
			</svg>
		</a>
  `,
  styles: `
    .back-button {
      position: absolute;
      top: 2rem;
      left: 2rem;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background-color: rgba(30, 30, 30, 0.8);
      color: var(--on-surface);
      text-decoration: none;
      border-radius: 50%;
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;
      z-index: 2;
      cursor: pointer;
    }

    .back-button:hover {
      background-color: var(--primary);
      color: var(--background);
      transform: translateX(-4px);
    }

    .back-button svg {
      width: 20px;
      height: 20px;
      transition: transform 0.3s ease;
    }

    .back-button:hover svg {
      transform: translateX(-2px);
    }
  `
})
export class BackButtonComponent {

  private router = inject(Router);
  backDestinationRoute = input.required<string>();

  onGoBack() {
    this.router.navigate(this.backDestinationRoute().split('/'));
  }
}
