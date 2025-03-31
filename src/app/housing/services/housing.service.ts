import { HousingPropertyPreview, HousingPropertyWithDetails } from '../models/housing-property';
import { Observable } from 'rxjs';

export abstract class HousingService {
  abstract getHousingPropertiesList(): Observable<HousingPropertyPreview[]>;
  abstract getHousingProperty(id: string): Observable<HousingPropertyWithDetails>;
  abstract makeOffer(id: string): Observable<void>;
  abstract offerLimitReached(id: string): Observable<boolean>;
  abstract propertyAlreadySold(id: string): Observable<boolean>;
}
