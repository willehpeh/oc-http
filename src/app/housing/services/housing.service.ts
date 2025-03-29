import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HousingPropertyPreview, HousingPropertyWithDetails } from '../models/housing-property';
import { DUMMY_PROPERTIES } from '../test-data/DUMMY_PROPERTIES';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  getHousingPropertiesList(): Observable<HousingPropertyPreview[]> {
    return of(DUMMY_PROPERTIES);
  }

  getHousingProperty(id: string): Observable<HousingPropertyWithDetails> {
    const found = DUMMY_PROPERTIES.find(property => property.id === id);
    if (!found) {
      throw new Error(`Property with id ${id} not found`);
    }
    return of(found);
  }
}
