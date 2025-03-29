import { Component, computed, inject, input } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { PropertyFeaturesComponent } from './property-features/property-features.component';
import { PropertySpecsComponent } from './property-specs/property-specs.component';

@Component({
  selector: 'app-housing-detail',
  imports: [
    AsyncPipe,
    CurrencyPipe,
    PropertyFeaturesComponent,
    PropertySpecsComponent
  ],
  template: `
		@if (housingProperty() | async; as property) {
			<main class="property-details">
				<div class="property-hero">
					<div class="offer-made-banner">Offer Made</div>
					<img [src]="property.thumbnailUrl" [alt]="property.title" class="property-hero-image">
				</div>

				<div class="property-content">
					<div class="property-header">
						<h1>{{ property.title }}</h1>
						<p class="price">{{ property.price | currency: 'EUR' : 'symbol' : '4.0-0' }}</p>
					</div>

					<app-property-specs [property]="property"/>

					<div class="property-description">
						<h2>Description</h2>
						<p>{{ property.description }}</p>
					</div>

					<app-property-features [features]="property.features"/>

					<a href="make-offer.html" class="make-offer-button">Make an Offer</a>
				</div>
			</main>
		}
  `,
  styleUrls: ['./housing-detail.component.scss'],
})
export class HousingDetailComponent {
  private housingService = inject(HousingService);
  id = input.required<string>();
  housingProperty = computed(() => this.housingService.getHousingProperty(this.id()));
}
