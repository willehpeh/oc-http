import { Component, inject, Input, OnInit } from '@angular/core';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { PropertyFeaturesComponent } from './property-features/property-features.component';
import { PropertySpecsComponent } from './property-specs/property-specs.component';
import { BackButtonComponent } from '../back-button/back-button.component';
import { HousingService } from '../../services/housing.service';
import { Observable } from 'rxjs';
import { HousingPropertyWithDetails } from '../../models/housing-property';

@Component({
  selector: 'app-property-detail',
  imports: [
    CurrencyPipe,
    PropertyFeaturesComponent,
    PropertySpecsComponent,
    BackButtonComponent,
    AsyncPipe,
  ],
  template: `
		@if (property$ | async; as property) {
			<main class="property-details">
				<div class="property-hero">
					<app-back-button backDestination="/housing"/>
					<div class="offer-made-banner">Offer Made</div>
					<img [src]="property.thumbnailUrl" [alt]="property.title" class="property-hero-image">
				</div>

				<div class="property-content">
					<div class="property-header">
						<h1>{{ property.title }}</h1>
						<p class="price">{{ property.price | currency: 'EUR' : 'symbol' : '4.0-0' }}</p>
					</div>

					<app-property-specs [property]="property"/>
					<app-property-features [features]="property.features"/>

					<a class="make-offer-button">Make an Offer</a>
				</div>
			</main>
		}
  `,
  styleUrls: ['./property-detail.component.scss'],
})
export class PropertyDetailComponent implements OnInit {
  private housingService = inject(HousingService);

  @Input() id!: string;
  property$!: Observable<HousingPropertyWithDetails>;

  ngOnInit() {
    this.property$ = this.housingService.getPropertyById(this.id);
  }
}
