import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';


import { routes } from './app.routes';
import {registerLocaleData} from '@angular/common'
import localeFr from '@angular/common/locales/fr'
import { ReplaceCommaPipe } from './shared/pipes/replace-comma.pipe';

registerLocaleData(localeFr)


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
    {
        provide: LOCALE_ID, useValue : 'fr'
    }
]
};
