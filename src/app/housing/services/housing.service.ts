import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { HousingPropertyPreview, HousingPropertyWithDetails } from '../models/housing-property';
import { DUMMY_PROPERTIES } from '../test-data/DUMMY_PROPERTIES';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  private _properties: HousingPropertyWithDetails[] = [...DUMMY_PROPERTIES];

  getHousingPropertiesList(): Observable<HousingPropertyPreview[]> {
    return of(this._properties);
  }

  getHousingProperty(id: string): Observable<HousingPropertyWithDetails> {
    const found = this._properties.find(property => property.id === id);
    if (!found) {
      throw new Error(`Property with id ${id} not found`);
    }
    return of(found);
  }

  makeOffer(id: string): Observable<void> {
    return of(undefined).pipe(
      tap(() => {
        const found = this._properties.find(property => property.id === id);
        if (!found) {
          throw new Error(`Property with id ${id} not found`);
        }
        found.offerMade = true;
      })
    );
  }

  isPropertyAlreadySold(id: string): Observable<boolean> {
    return of(Math.random() < 0.5);
  }
}
