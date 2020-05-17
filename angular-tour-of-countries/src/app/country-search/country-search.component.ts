import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';
import { CountryService } from '../country.service';


@Component({
  selector: 'app-country-search',
  templateUrl: './country-search.component.html',
  styleUrls: ['./country-search.component.css']
})
export class CountrySearchComponent implements OnInit {

  countries$: Observable<Array<any>>;
  private searchTerms = new Subject<string>();

  constructor(private countryService: CountryService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.countries$ = this.searchTerms.pipe(

      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.countryService.searchCountries(term)),
    )
  }

}
