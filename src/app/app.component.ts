import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './core/layout/header/header.component';
import {
  OfferLimitReachedModalComponent
} from './shared/modals/offer-limit-reached-modal/offer-limit-reached-modal.component';
import {
  OfferSubmittedModalComponent
} from './shared/modals/offer-submitted-modal/offer-submitted-modal.component';
import { ModalService } from './shared/modals/modal.service';
import {
  PropertySoldModalComponent
} from './shared/modals/property-sold-modal/property-sold-modal.component';
import { ErrorModalComponent } from './shared/modals/error-modal/error-modal.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    OfferLimitReachedModalComponent,
    OfferSubmittedModalComponent,
    PropertySoldModalComponent,
    ErrorModalComponent
  ],
  template: `
		<app-header/>
		<router-outlet/>
		@if (offerLimitReachedModalVisible()) {
			<app-offer-limit-reached-modal/>
		}
		@if (offerSubmittedModalVisible()) {
			<app-offer-submitted-modal/>
		}
		@if (soldModalVisible()) {
			<app-property-sold-modal/>
		}
    @if (errorModalVisible()) {
      <app-error-modal/>
    }
  `,
  styles: [],
})
export class AppComponent {
  private modalService = inject(ModalService);
  offerLimitReachedModalVisible = this.modalService.offerLimitReachedModalVisible;
  offerSubmittedModalVisible = this.modalService.offerSubmittedModalVisible;
  soldModalVisible = this.modalService.soldModalVisible;
  errorModalVisible = this.modalService.errorModalVisible;
}
