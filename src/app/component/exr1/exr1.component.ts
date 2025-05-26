import { CommonModule, NgFor, NgIf} from '@angular/common';
import { Component, OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IProduct } from './exr1';
import { ReplaceCommaPipe } from '../../shared/pipes/replace-comma.pipe';
import { StarRatingComponent } from "../../shared/components/star-rating.component/star-rating/star-rating.component";
import { ProductServices } from './exr1.service';
// NgModule


@Component({
  selector: 'app-exr1',
  imports: [NgFor, NgIf, FormsModule, CommonModule, ReplaceCommaPipe, StarRatingComponent],
  standalone: true,
  templateUrl: './exr1.component.html',
  styleUrl: './exr1.component.css',
  providers: [ProductServices]
})

export class Exr1Component implements OnInit {
    public products: IProduct[] = []

    public showBadge: boolean = false;

    private filterProducts = 'mot';


    public filterOfProducts: IProduct [] = [];


    public toggleBadge():void {
        this.showBadge = !this.showBadge;
    }

    // constructor (private productService: ProductServices)
    private productService ;

    constructor (productService: ProductServices){
            this.productService = productService
    }


    ngOnInit(): void {
        this.products = this.productService.getProducts()
        this.filterOfProducts = this.products;
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
    
    public receivedRating: string = '';
    
    public receiveRatingClick(message: string): void{
        this.receivedRating = message;
    }


}
