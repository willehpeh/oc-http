import { Component, input } from '@angular/core';
import { HousingPropertyPreview } from '../../../models/housing-property';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-housing-list-card',
  imports: [
    CurrencyPipe,
    RouterLink
  ],
  template: `
		@let property = propertyPreview();
		<article class="property-card">
			@if (property.offerMade) {
				<div class="offer-made-banner">Offer Made</div>
			}
			<a [routerLink]="property.id" class="property-link">
				<div class="property-image">
					<img [src]="property.thumbnailUrl"
							 [alt]="property.title">
				</div>
				<h2>{{ property.title }}</h2>
				<div class="property-details">
					<span class="price">{{ property.price | currency: 'EUR' : 'symbol' : '4.0-0' }}</span>
					<span class="surface">{{ property.surface }}m²</span>
					<span class="city">{{ property.city }}</span>
				</div>
			</a>
		</article>
  `,
  styleUrls: ['./housing-list-card.component.scss']
})
export class HousingListCardComponent {
  propertyPreview = input.required<HousingPropertyPreview>();
}
