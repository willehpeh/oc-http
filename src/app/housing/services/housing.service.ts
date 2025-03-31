import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HousingPropertyPreview } from '../models/housing-property';

@Injectable({
  providedIn: 'root'
})
export class HousingService {
  private http = inject(HttpClient);

  getAllProperties() {
    return this.http.get<HousingPropertyPreview[]>('http://localhost:3030/api/properties');
  }
}
