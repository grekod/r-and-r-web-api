import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CountryService }  from '../country.service';

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
    console.log(this.route.snapshot.paramMap.get('name'))
      this.route.paramMap.subscribe((params) => {
      this.name = params.get("name")
    })
    console.log(name);
    //const name = this.route.snapshot.paramMap.get('name');
    this.countryService.getCountry(name)
      .subscribe(country => this.country = country);
  }

  goBack(): void {
    this.location.back();
  }

}
