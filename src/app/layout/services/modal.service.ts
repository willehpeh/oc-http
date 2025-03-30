import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  private router = inject(Router);

  private showSoldModal = signal<boolean>(false);
  private showOfferMadeModal = signal<boolean>(false);

  soldModalVisible = this.showSoldModal.asReadonly();
  offerMadeModalVisible = this.showOfferMadeModal.asReadonly();

  toggleSoldModal(): void {
    this.showSoldModal.update(value => !value);
  }

  toggleOfferMadeModal(): void {
    this.showOfferMadeModal.set(true);
    setTimeout(() => {
      this.showOfferMadeModal.set(false);
      this.router.navigate(['/housing']);
    }, 2000);
  }
}
