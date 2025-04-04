import { Component, computed, inject, input } from '@angular/core';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { PropertyFeaturesComponent } from './property-features/property-features.component';
import { PropertySpecsComponent } from './property-specs/property-specs.component';
import { Router } from '@angular/router';
import { ModalService } from '../../../layout/services/modal.service';
import { tap } from 'rxjs';
import { BackButtonComponent } from '../back-button/back-button.component';
import { HousingService } from '../../services/housing.service';

@Component({
  selector: 'app-property-detail',
  imports: [
    AsyncPipe,
    CurrencyPipe,
    PropertyFeaturesComponent,
    PropertySpecsComponent,
    BackButtonComponent
  ],
  template: `
		@if (housingProperty() | async; as property) {
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

					<a class="make-offer-button" (click)="onMakeOffer()">Make an Offer</a>
				</div>
			</main>
		}
  `,
  styleUrls: ['./property-detail.component.scss'],
})
export class PropertyDetailComponent {
  private housingService = inject(HousingService);
  private modalService = inject(ModalService);
  private router = inject(Router);
  id = input.required<string>();
  housingProperty = computed(() => this.housingService.getHousingProperty(this.id()));

  onMakeOffer() {
    this.housingService.propertyAlreadySold(this.id()).pipe(
      tap(sold => {
        if (sold)  {
          this.modalService.toggleSoldModal();
          return;
        }
        this.router.navigate(['housing', this.id(), 'make-offer']);
      })
    ).subscribe();
  }
}
