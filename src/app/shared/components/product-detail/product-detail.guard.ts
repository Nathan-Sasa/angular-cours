import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class productDetailGuard implements CanActivate {

    constructor(private router: Router){}

    canActivate(
        next: ActivatedRouteSnapshot, 
        state: RouterStateSnapshot): boolean {

            const id = +next.url[1].path;

            if(isNaN(id) || id <= 0){
                alert('le produit n\'est pas disponible')

                this.router.navigate(['/products']);
                return false;
            }
            return true
        }
        
    
}

// This guard checks if the product ID in the route is valid (i.e., a number).
// export const productDetailGuardFn: CanActivateFn = (
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
// ): Observable<boolean> | Promise<boolean> | boolean => {
//     const productId = route.paramMap.get('id');
//     if (productId && !isNaN(+productId)) {
//         return true;
//     } else {
//         console.error('Invalid product ID');
//         return false;
//     }
// }
