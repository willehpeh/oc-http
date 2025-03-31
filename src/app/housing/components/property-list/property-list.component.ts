import { Component, inject } from '@angular/core';
import { PropertyListCardComponent } from './property-list-card/property-list-card.component';
import { DUMMY_PROPERTIES } from '../../test-data/DUMMY_PROPERTIES';
import { HousingService } from '../../services/housing.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-property-list',
  imports: [
    PropertyListCardComponent,
    AsyncPipe
  ],
  template: `
		<main class="property-list">
			<div class="property-grid">
				@for (property of properties$ | async; track property.id) {
					<app-property-list-card [property]="property"/>
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
  properties$ = this.housingService.getAllProperties();
  protected readonly DUMMY_PROPERTIES = DUMMY_PROPERTIES;
}
