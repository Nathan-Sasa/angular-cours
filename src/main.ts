import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { ReplaceCommaPipe } from './app/shared/pipes/replace-comma.pipe';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

