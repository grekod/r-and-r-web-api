import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Country } from '../country';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries: Array<any> = new Array<any>();

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries() {
    this.httpClient.get('https://restcountries.eu/rest/v2/all')
    .subscribe(
      data => {
        this.countries = this.countries.concat(data);
      }
    );
  }

}
