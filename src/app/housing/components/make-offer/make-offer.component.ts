import { Component, computed, inject, input } from '@angular/core';
import { HousingService } from '../../services/housing.service';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { filter, switchMap, tap } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { ModalService } from '../../../layout/services/modal.service';
import { OfferLimitReachedModalComponent } from './offer-limit-reached-modal/offer-limit-reached-modal.component';
import { OfferSubmittedModalComponent } from './offer-submitted-modal/offer-submitted-modal.component';

@Component({
  selector: 'app-make-offer',
  imports: [
    AsyncPipe,
    CurrencyPipe,
    FormsModule,
    OfferLimitReachedModalComponent,
    OfferSubmittedModalComponent
  ],
  template: `
		@if (propertyPreview() | async; as property) {
			<main class="make-offer">
				<div class="offer-content">
					<h1>Make an Offer</h1>
					<div class="property-summary">
						<img [src]="property.thumbnailUrl" [alt]="property.title" class="property-image">
						<div class="property-info">
							<h2>{{ property.title }}</h2>
							<p class="price">{{ property.price | currency: 'EUR' : 'symbol' : '4.0-0' }}</p>
							<p class="location">{{ property.city }}</p>
						</div>
					</div>

					<form class="offer-form" #offerForm="ngForm">
						<div class="form-group">
							<label for="name">Full Name</label>
							<input type="text" id="name" name="name">
						</div>

						<div class="form-group">
							<label for="email">Email Address</label>
							<input type="email" id="email" name="email">
						</div>

						<div class="form-group">
							<label for="phone">Phone Number</label>
							<input type="tel" id="phone" name="phone">
						</div>

						<div class="form-group">
							<label for="offer">Your Offer (€)</label>
							<input type="number" id="offer" name="offer" min="0" step="1000">
						</div>

						<div class="form-group">
							<label for="message">Message (Optional)</label>
							<textarea id="message" name="message" rows="4"></textarea>
						</div>

						<button type="submit" class="submit-button" (click)="onSubmitOffer()">Submit Offer</button>
					</form>
				</div>
			</main>
			@if (offerLimitReachedModalVisible()) {
        <app-offer-limit-reached-modal/>
			}
      @if (offerSubmittedModalVisible()) {
        <app-offer-submitted-modal/>
      }
		}
  `,
  styleUrls: ['./make-offer.component.scss']
})
export class MakeOfferComponent {
  private housingService = inject(HousingService);
  private modalService = inject(ModalService);
  id = input.required<string>();
  propertyPreview = computed(() => this.housingService.getHousingProperty(this.id()));
  offerLimitReachedModalVisible = this.modalService.offerLimitReachedModalVisible;
  offerSubmittedModalVisible = this.modalService.offerSubmittedModalVisible;

  onSubmitOffer(): void {
    this.housingService.offerLimitReached(this.id()).pipe(
      tap(limitReached => {
        if (limitReached) {
          this.modalService.toggleOfferLimitReachedModal();
        }
      }),
      filter(limitReached => !limitReached),
      switchMap(() => this.housingService.makeOffer(this.id())),
      tap(() => this.modalService.showOfferSubmittedModalThenNavigate())
    ).subscribe();
  }
}
