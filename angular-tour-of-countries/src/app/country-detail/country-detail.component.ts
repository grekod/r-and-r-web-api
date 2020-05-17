import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Location, ɵBrowserPlatformLocation } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CountryService }  from '../country.service';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.css'],
})
export class CountryDetailComponent implements OnInit {

  country: any;
  name: string;

  constructor(
    private route: ActivatedRoute,
    private countryService: CountryService,
    private httpClient: HttpClient,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getCountry();
  }

  getCountry() {
    this.countryService.getCountry(this.route.snapshot.paramMap.get('name'))
      .subscribe(data => this.country = data);
  }

  goBack(): void {
    this.location.back();
  }
}
