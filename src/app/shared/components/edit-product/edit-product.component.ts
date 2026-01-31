import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductServices } from '../../../component/exr1/exr1.service';
import { IProduct } from '../../../component/exr1/exr1';

@Component({
  selector: 'app-edit-product',
  imports: [ 
    CommonModule, 
    FormsModule, 
    ReactiveFormsModule,
    RouterModule
],
  standalone: true,
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})

export class EditProductComponent implements OnInit {
    public alerteFn(): void {
        alert('cette action n\'est pas encore fonctionnelle !');
    }

    public productForm: FormGroup = new FormGroup({});

    public product: IProduct = <IProduct>{};

    
    constructor(
        private fb: FormBuilder,
        private route: ActivatedRoute,
        private ProductService: ProductServices
    ) { }

    ngOnInit(): void {
        
        this.productForm = this.fb.group({
            // productId: [''],
            name: ['', Validators.required],
            price: ['', Validators.required],
            description: [''],
            rating: [''],
            // imageUrl: [''],
            // category: [''],
            // isAvailable: [false]
        });
    
        this.route.paramMap.subscribe(params => {
            const id = params.get('id');
            
            this.getSelectedProduct(+id!);
        })
    }

    public getSelectedProduct(id: number): void {
        this.ProductService.getProductById(id).subscribe({
            next: (product) => {
                // console.log(product);
                // this.displayProduct(product)
                // Vérification si le produit existe
                
                if (product) {
                    this.productForm.patchValue({
                        // productId: product.productId,
                        name: product.name,
                        price: product.price,
                        description: product.description,
                        rating: product.rating,
                        // imageUrl: product.imageUrl,
                        // category: product.category,
                        // isAvailable: product.isAvailable
                    });
                }
            }
        });
    }

    // public displayProduct(product: IProduct): void {
    //     console.log(this.productForm.value);

    //     this.product = this.productForm.value as IProduct;

    //     this.productForm.patchValue({
    //         // productId: this.product.productId,
    //         name: this.product.name,
    //         price: this.product.price,
    //         rating: this.product.rating,
    //         description: this.product.description,
    //         // imageUrl: this.product.imageUrl,
    //         // category: this.product.category,
    //         // isAvailable: this.product.isAvailable
    //     })
    //     // console.log('Produit à afficher:', this.product);
    // }

    public saveProduct(): void{
        console.log(this.productForm.value);
    };




    
}
