import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NxDemoLib } from './lib/nxdemolib1.module';

platformBrowserDynamic()
  .bootstrapModule(NxDemoLib)
  .catch(err => console.error(err));

