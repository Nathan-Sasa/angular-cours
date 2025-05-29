import { Component, NgModule } from '@angular/core';
import { Exr1Component } from '../../../component/exr1/exr1.component';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-product',
  imports: [ CommonModule],
  standalone: true,
  templateUrl: './edit-product.component.html',
  styleUrl: './edit-product.component.css'
})
export class EditProductComponent {

}
