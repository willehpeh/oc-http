import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HousingPropertyPreview } from '../models/housing-property';
import { DUMMY_PROPERTIES } from '../test-data/DUMMY_PROPERTIES';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  getHousingPropertiesList(): Observable<HousingPropertyPreview[]> {
    return of(DUMMY_PROPERTIES);
  }
}
