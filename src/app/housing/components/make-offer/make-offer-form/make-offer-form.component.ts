import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

export type OfferFormValue = {
  name: string;
  email: string;
  phone: string;
  offer: number;
  message: string;
};

@Component({
  selector: 'app-make-offer-form',
  imports: [
    ReactiveFormsModule
  ],
  template: `
		<form class="offer-form" [formGroup]="offerForm">
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
							(click)="onSubmitForm()">
				Submit Offer
			</button>
		</form>
  `,
  styles: `
    .offer-form {
      display: grid;
      gap: 1.5rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }

    .form-group label {
      color: var(--on-surface);
      font-size: 0.9rem;
    }

    .form-group input,
    .form-group textarea {
      padding: 0.75rem;
      background-color: var(--surface);
      border: 1px solid var(--surface-light);
      border-radius: 6px;
      color: var(--on-background);
      font-size: 1rem;
    }

    .form-group input:focus,
    .form-group textarea:focus {
      outline: none;
      border-color: var(--primary);
    }

    .submit-button {
      background-color: var(--primary);
      color: var(--background);
      border: none;
      padding: 1rem;
      border-radius: 6px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: opacity 0.3s ease;
    }

    .submit-button:hover {
      opacity: 0.9;
    }
  `
})
export class MakeOfferFormComponent {
  offerForm = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    email: new FormControl('', { nonNullable: true }),
    phone: new FormControl('', { nonNullable: true }),
    offer: new FormControl(0, { nonNullable: true }),
    message: new FormControl('', { nonNullable: true }),
  });
  formSubmitted = output<OfferFormValue>();

  onSubmitForm() {
    this.formSubmitted.emit(this.offerForm.value as OfferFormValue);
  }
}
