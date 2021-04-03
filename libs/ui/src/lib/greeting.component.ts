import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  template: `
    <h1>Welcome to hellofdsfdsf {{ title }}!</h1>
  `
})
export class GreetingComponent implements OnInit {
  @Input() title: string;
  @Output() data: EventEmitter<any> = new EventEmitter();
  countryListUrl = "https://api.first.org/data/v1/countries";

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.countryListUrl).subscribe((countries: any) => {
      debugger
      console.log(countries.data.AF);
      this.data.emit(countries.data);
      // countries.data.filter(country => country)
    });
  }
}
