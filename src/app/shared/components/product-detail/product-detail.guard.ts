import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';

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