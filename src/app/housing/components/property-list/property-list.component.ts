import { Component } from '@angular/core';
import { PropertyListCardComponent } from './property-list-card/property-list-card.component';
import { DUMMY_PROPERTIES } from '../../test-data/DUMMY_PROPERTIES';

@Component({
  selector: 'app-property-list',
  imports: [
    PropertyListCardComponent
  ],
  template: `
		<main class="property-list">
			<div class="property-grid">
				@for (preview of DUMMY_PROPERTIES; track preview.id) {
          <app-property-list-card [property]="preview"/>
				}
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
export class PropertyListComponent {
  protected readonly DUMMY_PROPERTIES = DUMMY_PROPERTIES;
}
