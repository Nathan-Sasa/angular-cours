import { Injectable } from "@angular/core"
import { IProduct } from "./exr1"
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Observable, throwError } from "rxjs";
import { catchError, tap} from "rxjs/operators";
// import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class ProductServices{

    private readonly PRODUCT_API_URL = 'assets/api/products.json';

    constructor(private http: HttpClient){
        
    }

    public getProducts(): Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.PRODUCT_API_URL).pipe(
            tap(products =>console.log('products:', products)),
            catchError(this.handleError)
        )
    }

    private handleError(error: HttpErrorResponse){
        if(error.error instanceof ErrorEvent){
            // A client-side or network error occurred. handle it accordingly.
            console.error('An error occurred:', error.error.message);
        }else{
            // the backend returned an unsuccessful response code.
            // the response body may contain clues as to what went wrong
            console.error(
                `Backend returned code ${error.status}` +
                `Body was : ${error.error}`
            );   
        }
        // Return an observable with a user-facing error message
        return throwError(
            'Something bad happened; please try again later.'
        )    
    }
}