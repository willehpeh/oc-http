import { Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { HousingListCardComponent } from './housing-list-card/housing-list-card.component';
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-housing-list',
  imports: [
    AsyncPipe,
    HousingListCardComponent
  ],
  template: `
		<main class="property-list">
			<div class="property-grid">
				@for (preview of housingPropertyPreviews$ | async; track preview.id) {
          <app-housing-list-card/>
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
export class HousingListComponent {
  private housingService = inject(HousingService);
  housingPropertyPreviews$ = this.housingService.getHousingPropertiesList();
}
