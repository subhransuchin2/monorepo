import { Component, Input } from '@angular/core';

@Component({
  template: `
    <h1>Welcome to NxDemo. I am a Angular Library and the title value is coming from {{ title }}!</h1>
  `
})
export class GreetingComponent {
  @Input() title: string;

}
