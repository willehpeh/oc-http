import { Component, computed, inject, input } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { AsyncPipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-housing-detail',
  imports: [
    AsyncPipe,
    CurrencyPipe
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

					<div class="property-specs">
						<div class="spec-item">
							<span class="label">Surface</span>
							<span class="value">{{ property.surface }}m²</span>
						</div>
						<div class="spec-item">
							<span class="label">Bedrooms</span>
							<span class="value">{{ property.bedrooms }}</span>
						</div>
						<div class="spec-item">
							<span class="label">Bathrooms</span>
							<span class="value">{{ property.bathrooms }}</span>
						</div>
						<div class="spec-item">
							<span class="label">Location</span>
							<span class="value">{{ property.city }}</span>
						</div>
					</div>

					<div class="property-description">
						<h2>Description</h2>
						<p>{{ property.description }}</p>
					</div>

					<div class="property-features">
						<h2>Features</h2>
						<ul>
							@for (feature of property.features; track feature) {
                <li>{{ feature }}</li>
							}
						</ul>
					</div>

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
