import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { PropertyListCardComponent } from './property-list-card/property-list-card.component';
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-property-list',
  imports: [
    AsyncPipe,
    PropertyListCardComponent
  ],
  template: `
		<main class="property-list">
			<div class="property-grid">
				@for (preview of housingPropertyPreviews$ | async; track preview.id) {
          <app-property-list-card [propertyPreview]="preview"/>
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
  private housingService = inject(HousingService);
  housingPropertyPreviews$ = this.housingService.getHousingPropertiesList();
}
