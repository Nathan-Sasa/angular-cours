import { CommonModule, NgFor, NgIf} from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from './exr1';
import { ReplaceCommaPipe } from '../../shared/pipes/replace-comma.pipe';
import { StarRatingComponent } from "../../shared/components/star-rating.component/star-rating/star-rating.component";
import { ProductServices } from './exr1.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// import {HttpClient} from '@angular/common/http'
// HttpClient


@Component({
  selector: 'app-exr1',
  imports: [
    NgFor,
    NgIf,
    FormsModule,
    CommonModule,
    ReplaceCommaPipe,
    StarRatingComponent,
    HttpClientModule,
    RouterModule
],
  standalone: true,
  templateUrl: './exr1.component.html',
  styleUrl: './exr1.component.css',
  providers: [ProductServices]
})

export class Exr1Component implements OnInit {

    title: string = "Gestion des products"

    public products: IProduct[] = [];

    public showBadge: boolean = false;

    private filterProducts = 'mot';

    public filterOfProducts: IProduct [] = [];

    public receivedRating: string = '';

    public errMsg: string = ''

    public toggleBadge():void {
        this.showBadge = !this.showBadge;
    }

    private productService ;

    constructor (productService: ProductServices){
        this.productService = productService
    }

    ngOnInit(): void {
        this.productService.getProducts().subscribe({
            next: (data) =>{
                this.products = data,
                this.filterOfProducts = this.products;
            },
            error: err => this.errMsg = err
        })
        this.productFilter = '';
    }

    getNewPrice(price: number): number {
        return price * 1.2;
    }

    public get productFilter(): string {
        return this.filterProducts;
    }

    public set productFilter(filter: string){
        this.filterProducts = filter;

        this.filterOfProducts = this.filterProducts ? this.filterProduct(this.filterProducts) : this.products
    }

    private filterProduct(criteria:string): IProduct[]{
        criteria = criteria.toLocaleLowerCase();

        const res = this.products.filter(
            (product: IProduct) => product.name.toLocaleLowerCase().indexOf(criteria) != -1
        );
        return res;
    }

    public receiveRatingClick(message: string): void{
        this.receivedRating = message;
    }
}
