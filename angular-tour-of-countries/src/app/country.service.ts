import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { count } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countriesUrl = 'https://restcountries.eu/rest/v2/all';  // URL to web api
  private countryUrl = 'https://restcountries.eu/rest/v2/name/';

  constructor(
    private httpClient: HttpClient,
  ) { }

  getCountries(): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(this.countriesUrl);
  }

 getCountry(name: string): Observable<any> {
    const url = `${this.countryUrl}${name}`;
    return this.httpClient.get<any>(url);
}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  searchCountries(term: string): Observable<Array<any>> {
    
    if (!term.trim()) {
      // if not search term, return empty country array.
      return of([]);
    }
    
    return this.httpClient.get<Array<any>>(`${this.countryUrl}${term}`);
  }


}
