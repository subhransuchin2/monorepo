import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'happynrwl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angularapp123123';
  countryListUrl = "https://api.first.org/data/v1/countries";
  countryFlag: string;
  constructor(private http: HttpClient) { }

  ngOnInit() {
    // this.http.get(this.countryListUrl).subscribe((countries: any) => {
    //   console.log(countries.data.AF);
    //   // countries.data.filter(country => country)
    // });
  }
  loadCountryImage(event) {
    debugger

    if (event.detail.AF.country === "Afghanistan") {
      this.countryFlag = event.detail.AF.country;
    }
    
  }
}
