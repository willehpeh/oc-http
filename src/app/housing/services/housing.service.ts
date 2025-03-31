import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { HousingPropertyPreview, HousingPropertyWithDetails } from '../models/housing-property';
import { DUMMY_PROPERTIES } from '../test-data/DUMMY_PROPERTIES';

@Injectable()
export class HousingService {

  private _properties: HousingPropertyWithDetails[] = [...DUMMY_PROPERTIES];
  private readonly _soldProperties: string[] = [];
  private readonly _maxOfferProperties: string[] = [];

  constructor() {
    this._soldProperties.push(this._properties[this._properties.length - 2].id);
    this._maxOfferProperties.push(this._properties[this._properties.length - 1].id);
  }

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

  offerLimitReached(id: string): Observable<boolean> {
    return of(this._maxOfferProperties.includes(id));
  }

  propertyAlreadySold(id: string): Observable<boolean> {
    return of(this._soldProperties.includes(id));
  }
}
