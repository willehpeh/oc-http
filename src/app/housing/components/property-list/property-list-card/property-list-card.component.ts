import { Component, input, output } from '@angular/core';
import { HousingPropertyPreview } from '../../../models/housing-property';
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
				<app-property-list-card-details [property]="property()" 
                                        (favouriteToggled)="onToggleFavourite()"/>
			</div>
		</article>
  `,
  styleUrls: ['./property-list-card.component.scss']
})
export class PropertyListCardComponent {
  property = input.required<HousingPropertyPreview>();
  cardClicked = output<{ id: string }>();
  favouriteToggled = output<{ id: string }>();

  onClickCard() {
    this.cardClicked.emit({ id: this.property().id });
  }

  onToggleFavourite() {
    this.favouriteToggled.emit({ id: this.property().id });
  }
}
