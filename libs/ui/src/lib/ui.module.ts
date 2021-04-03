import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { GreetingComponent } from './greeting.component';
import { createCustomElement } from '@angular/elements';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [CommonModule, BrowserModule, HttpClientModule],
  declarations: [GreetingComponent],
  entryComponents: [GreetingComponent],
  bootstrap: []
})
export class UiModule {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const element = createCustomElement(GreetingComponent, {
      injector: this.injector
    });
    customElements.define('happynrwl-greeting', element);
  }
}
