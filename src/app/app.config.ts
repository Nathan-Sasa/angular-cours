import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, RouterModule, Routes} from '@angular/router';
import {registerLocaleData} from '@angular/common'
import localeFr from '@angular/common/locales/fr'
import { provideHttpClient } from '@angular/common/http';

import { HomeComponent } from './shared/components/home/home.component';
import { ProductDetailComponent } from './shared/components/product-detail/product-detail.component';
import { Exr1Component } from './component/exr1/exr1.component';
import { productDetailGuard } from './shared/components/product-detail/product-detail.guard';
import { EditProductComponent } from './shared/components/edit-product/edit-product.component';


registerLocaleData(localeFr)

const routes: Routes = [
    {path: 'home', component : HomeComponent},
    {path: '', redirectTo: 'home', pathMatch : 'full'},
    {
        path: 'products/:id', component: ProductDetailComponent,
        canActivate: [productDetailGuard]
    },
    {
        path: 'products/:id/edit', component: EditProductComponent
    },
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