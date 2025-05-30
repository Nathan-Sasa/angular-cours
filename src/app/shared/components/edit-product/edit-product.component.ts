import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

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

    public productForm: FormGroup = new FormGroup({});

    constructor(
        private fb: FormBuilder
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
    }

    public saveProduct(): void{
        console.log(this.productForm.value);
    }
}
