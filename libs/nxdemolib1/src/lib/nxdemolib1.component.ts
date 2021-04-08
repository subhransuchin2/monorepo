import { Component, Input } from '@angular/core';

@Component({
  template: `
    <h1>Welcome to NxDemo. I am a new Angular Library and the title is coming from {{ title }}!</h1>
  `
})
export class NxDemoLibComponent {
  @Input() title: string;

}
