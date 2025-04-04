import { Component, inject, Input, OnInit } from '@angular/core';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { HousingService } from '../../services/housing.service';
import { delay, filter, Observable, switchMap, tap } from 'rxjs';
import { HousingPropertyWithDetails } from '../../models/housing-property';
import { ModalService } from '../../../core/layout/services/modal.service';
import { MakeOfferFormComponent, OfferFormValue } from './make-offer-form/make-offer-form.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-make-offer',
  imports: [
    CurrencyPipe,
    AsyncPipe,
    MakeOfferFormComponent,
  ],
  template: `
		@if (property$ | async; as property) {
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
          <app-make-offer-form (formSubmitted)="onSubmitForm($event)" />
				</div>
			</main>
		}
  `,
  styleUrls: ['./make-offer.component.scss']
})
export class MakeOfferComponent implements OnInit {
  private housingService = inject(HousingService);
  private modalService = inject(ModalService);
  private router = inject(Router);
  @Input() id!: string;
  property$!: Observable<HousingPropertyWithDetails>;

  ngOnInit(): void {
    this.property$ = this.housingService.getPropertyById(this.id);
  }

  onSubmitForm(offerFormValue: OfferFormValue): void {
    this.housingService.checkIfOfferLimitReached(this.id).pipe(
      tap(limitReached => {
        if (limitReached) {
          this.modalService.toggleOfferLimitReachedModal()
        }
      }),
      filter(limitReached => !limitReached),
      switchMap(() => this.housingService.makeOffer(this.id, offerFormValue.offer)),
      tap(() => this.modalService.toggleOfferSubmittedModal()),
      delay(2000),
      tap(() => {
        this.modalService.toggleOfferSubmittedModal();
        this.router.navigate(['/housing']);
      })
    ).subscribe();
  }
}
