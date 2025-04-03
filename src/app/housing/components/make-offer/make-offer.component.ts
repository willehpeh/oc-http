import { Component, inject, Input, OnInit } from '@angular/core';
import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { HousingService } from '../../services/housing.service';
import { Observable } from 'rxjs';
import { HousingPropertyWithDetails } from '../../models/housing-property';

@Component({
  selector: 'app-make-offer',
  imports: [
    CurrencyPipe,
    FormsModule,
    AsyncPipe,
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

						<button type="submit" 
                    class="submit-button" 
                    (click)="onSubmitForm(offerForm)">
              Submit Offer
            </button>
					</form>
				</div>
			</main>
		}
  `,
  styleUrls: ['./make-offer.component.scss']
})
export class MakeOfferComponent implements OnInit {
  private housingService = inject(HousingService);
  @Input() id!: string;
  property$!: Observable<HousingPropertyWithDetails>;

  ngOnInit(): void {
    this.property$ = this.housingService.getPropertyById(this.id);
  }

  onSubmitForm(offerForm: NgForm): void {

  }
}
