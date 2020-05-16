import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries: Array<any> = new Array<any>();

  constructor(
    private countryService: CountryService,
    private httpClient: HttpClient,
    ) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries():void {
    this.countryService.getCountries()
    .subscribe(

      
      countries => this.countries = countries
      
      
      
      /*
      data => {
        this.countries = this.countries.concat(data);
      }
      */
    );
  }
}
