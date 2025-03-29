import { Component } from '@angular/core';

@Component({
  selector: 'app-housing-list',
  imports: [],
  template: `
		<main class="property-list">
			<div class="property-grid">
      </div>
    </main>
  `,
  styles: `
    .property-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 2rem;
    }
  `
})
export class HousingListComponent {

}
