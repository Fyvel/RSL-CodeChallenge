import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { LatestResultModel } from '../models/LatestResultModel';
import { OpenDrawModel } from '../models/OpenDrawModel';
import { LatestResultQueryModel } from '../models/LatestResultQueryModel';
import { OpenDrawQueryModel } from '../models/OpenDrawQueryModel';

@Injectable({
  providedIn: 'root'
})
export class LottoService {

  constructor(private http: HttpClient) { }

  getLatestResults(query: LatestResultQueryModel): Observable<LatestResultModel[]> {
    return this.http.post(`${environment.baseUrl}/latestresults`, query).pipe(
      map((res: any) => {
        try {
          console.log('Latest results', res.DrawResults);
          const latestResultsMapper: (x: any) => LatestResultModel =
            x => ({
              productDisplayName: x.DrawDisplayName,
              logoImage: x.DrawLogoUrl,
              drawDate: x.DrawDate,
              drawNumber: x.DrawNumber,
              primaryNumbers: x.PrimaryNumbers,
              secondaryNumbers: x.SecondaryNumbers,
              dividends: x.Dividends
            });
          return (res.DrawResults as any[] || []).map(latestResultsMapper);

        } catch (err) {
          throw new Error(err);
        }
      })
    );
  }

  getOpenDraws(query: OpenDrawQueryModel): Observable<OpenDrawModel[]> {
    return this.http.post(`${environment.baseUrl}/opendraws`, query).pipe(
      map((res: any) => {
        try {
          console.log('Open draws', res.Draws);
          const openDrawsMapper: (x: any) => OpenDrawModel =
            x => ({
              drawDisplayName: x.DrawDisplayName,
              logoImage: x.DrawLogoUrl,
              drawDate: x.DrawDate,
              drawTime: x.DrawEndSellDateTimeUTC,
              drawNumber: x.DrawNumber,
            });

          return (res.Draws as any[] || []).map(openDrawsMapper);
        } catch (err) {
          throw new Error(err);
        }
      })
    );
  }
}
