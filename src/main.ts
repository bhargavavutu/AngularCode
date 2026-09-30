import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { IndexComponent } from  './app/components/index.component';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
