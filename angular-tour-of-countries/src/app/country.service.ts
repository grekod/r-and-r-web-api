import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



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
    return this.httpClient.get<Array<any>>(this.countriesUrl).pipe();
  }

 getCountry(name: string): Observable<any> {
  const url = `${this.countryUrl}${name}`;
  return this.httpClient.get<any>(url).pipe();
}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
}
