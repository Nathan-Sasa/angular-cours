import { Component, OnInit} from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductServices } from '../../../component/exr1/exr1.service';
import { IProduct } from '../../../component/exr1/exr1';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule, NgIf } from '@angular/common';
import { ReplaceCommaPipe } from '../../pipes/replace-comma.pipe';
import { StarRatingComponent } from '../star-rating.component/star-rating/star-rating.component';

@Component({
    selector: 'app-product-detail',
    imports: [RouterModule, HttpClientModule, NgIf, ReplaceCommaPipe, StarRatingComponent, CommonModule],
    standalone: true,
    templateUrl: './product-detail.component.html',
    styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
    public product: IProduct = <IProduct>{};
    // public product?: IProduct ;

    constructor(
        private route: ActivatedRoute,
        private productService: ProductServices,
        private router: Router
    ) {}

    ngOnInit(): void {

        const idParam = this.route.snapshot.paramMap.get('id');
        const id = idParam ? +idParam : 0;


        this.productService.getProducts().subscribe((products: IProduct[]) => {
            this.product = products.find(p => p.productId === id)|| <IProduct>{} as IProduct;
            // console.log();
            // console.log(this.product);

            if (!this.product){
                console.log(`Produit avec l'ID ${id} introuvable`);
            }
        })
    }
    public backToList():void{
        this.router.navigate(['/products']);
    }
}

// const foundProduct = products.find(product => product.productId === id);
// if (foundProduct) {
//     this.product = foundProduct;
//     console.log('Produit trouvé:', this.product);
// }
// else {
//     console.error("Produit non trouver avec l'id :", id);

