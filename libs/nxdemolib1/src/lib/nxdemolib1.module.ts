import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { NxDemoLibComponent } from './nxdemolib1.component';


@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [NxDemoLibComponent],
  entryComponents: [NxDemoLibComponent],
  bootstrap: []
})
export class NxDemoLib {
  constructor(private injector: Injector) {}

  ngDoBootstrap() {
    const element = createCustomElement(NxDemoLibComponent, {
      injector: this.injector
    });
    customElements.define('nxdemo-nxdemolib', element);
  }
}
