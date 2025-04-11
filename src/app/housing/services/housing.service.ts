import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HousingPropertyPreview, HousingPropertyWithDetails } from '../models/housing-property';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  private http = inject(HttpClient);

  getAllProperties() {
    return this.http.get<HousingPropertyPreview[]>('http://localhost:3030/api/properties');
  }

  getPropertyById(id: string) {
    return this.http.get<HousingPropertyWithDetails>(`http://localhost:3030/api/properties/${id}`);
  }

  checkIfOfferLimitReached(id: string): Observable<boolean> {
    return this.http.get<{ id: string, offerLimitReached: boolean }>(`http://localhost:3030/api/properties/${id}/check-offer-limit`).pipe(
      map(response => response.offerLimitReached)
    );
  }

  makeOffer(id: string, amount: number) {
    return this.http.post(`http://localhost:3030/api/properties/${id}/make-offer`, { amount });
  }

  checkIfPropertySold(id: string): Observable<boolean> {
    return this.http.get<{ id: string, sold: boolean }>(`http://localhost:3030/api/properties/${id}/sold`).pipe(
      map(response => response.sold)
    );
  }

  toggleFavourite(id: string): Observable<void> {
    return this.http.post<void>(`http://localhost:3030/api/properties/${id}/favourite`, {});
  }
}
