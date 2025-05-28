import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ProductServices } from '../../../component/exr1/exr1.service';
import { IProduct } from '../../../component/exr1/exr1';

@Component({
    selector: 'app-product-detail',
    imports: [RouterModule],
    standalone: true,
    templateUrl: './product-detail.component.html',
    styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent {
    public product: IProduct = <IProduct>{};

    constructor(
        private route: ActivatedRoute,
        private productService: ProductServices
    ) {}

    ngOnInit(): void {
        // const id = +this.route.snapshot.paramMap.get('id');

        // console.log('id', id);

        const idParam = this.route.snapshot.paramMap.get('id');
        if (idParam !== null) {
            const id = +idParam;
            console.log('id', id);

            this.productService.getProducts().subscribe((products: IProduct[]) =>{
                this.product = products.find(product => product.productId === id)

                console.log('products', this.product);
            })


        } else {
            console.log(
                "Aucun ID de produit trouvé dans les paramètres de l'URL."
            );
        }
    }
}

// const foundProduct = products.find(product => product.productId === id);
// if (foundProduct) {
//     this.product = foundProduct;
//     console.log('Produit trouvé:', this.product);
// }
// else {
//     console.error("Produit non trouver avec l'id :", id);
// }
