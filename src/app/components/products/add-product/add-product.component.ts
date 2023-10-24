import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  freshnessList = ['New', 'Second Hand', 'Refurbished']
  productForm!: FormGroup

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      date: ['', Validators.required],
      freshness: ['', Validators.required],
      price: ['', Validators.required],
      comment: [''],
    })
  }

  addProduct(): void {
    console.log(this.productForm.value)
  }
}
