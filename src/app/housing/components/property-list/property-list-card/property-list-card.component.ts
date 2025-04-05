import { Component, inject, input } from '@angular/core';
import { HousingPropertyPreview } from '../../../models/housing-property';
import { Router } from '@angular/router';
import { PropertyListCardDetailsComponent } from './property-list-card-details/property-list-card-details.component';
import {
  PropertyListCardThumbnailComponent
} from './property-list-card-thumbnail/property-list-card-thumbnail.component';

@Component({
  selector: 'app-property-list-card',
  imports: [
    PropertyListCardDetailsComponent,
    PropertyListCardThumbnailComponent
  ],
  template: `
		<article class="property-card" (click)="onClickCard()">
			@if (property().offerMade) {
				<div class="offer-made-banner">Offer Made</div>
			}
			<div class="property-link">
				<app-property-list-card-thumbnail [property]="property()"/>
				<app-property-list-card-details [property]="property()"/>
			</div>
		</article>
  `,
  styleUrls: ['./property-list-card.component.scss']
})
export class PropertyListCardComponent {
  private router = inject(Router);
  property = input.required<HousingPropertyPreview>();

  onClickCard() {
    this.router.navigate(['/housing', this.property().id]);
  }
}
