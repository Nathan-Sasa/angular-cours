import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule, Routes} from '@angular/router';


// import { routes } from './app.routes';
import {registerLocaleData} from '@angular/common'
import localeFr from '@angular/common/locales/fr'
import { HomeComponent } from './shared/components/home/home.component';
import { ProductDetailComponent } from './shared/components/product-detail/product-detail.component';
import { Exr1Component } from './component/exr1/exr1.component';
import { provideHttpClient } from '@angular/common/http';
// import { routes } from './app.routes';
// import { Router } from '@angular/router';


registerLocaleData(localeFr)

// RouterModule.forRoot([
//     {path: 'home', component : HomeComponent},
//     {path: '', redirectTo: 'home', pathMatch : 'full'},
//     {path: 'products/:id', component: ProductDetailComponent},
//     {path: 'products', component: Exr1Component},
//     {path: '**', redirectTo: 'home', pathMatch: 'full'}
// ])


const routes: Routes = [
    {path: 'home', component : HomeComponent},
    {path: '', redirectTo: 'home', pathMatch : 'full'},
    {path: 'products/:id', component: ProductDetailComponent},
    {path: 'products', component: Exr1Component},
    {path: '**', redirectTo: 'home', pathMatch: 'full'}
]

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }),
        provideRouter(routes),
        {provide: LOCALE_ID, useValue : 'fr',},
        provideHttpClient(),
    ]
};


