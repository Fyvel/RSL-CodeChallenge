import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LottoService {

  constructor(private http: HttpClient) { }

  getLatestResults(query: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}/latestresults`, query).pipe(
      map((res: any) => {
        try {
          console.log('Latest results', res.DrawResults);
          return res.DrawResults;
        } catch (err) {
          throw new Error(err);
        }
      })
    );
  }

  getOpenDraws(query: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}/opendraws`, query).pipe(
      map((res: any) => {
        try {
          console.log('Open draws', res);
          return res.Draws;
        } catch (err) {
          throw new Error(err);
        }
      })
    );
  }
}
