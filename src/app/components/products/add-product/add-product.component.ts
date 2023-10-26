import { Component, Inject, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'

import { ApiService } from '../../../services/api.service'
import { Product } from '../../../interfaces/Product'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  isEditMode: boolean = false
  freshnessList = ['New', 'Second Hand', 'Refurbished']
  productForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {}

  ngOnInit(): void {
    if (this.data) this.isEditMode = true
    if (this.isEditMode) {
      this.productForm = this.fb.group({
        productName: [this.data.productName, Validators.required],
        category: [this.data.category, Validators.required],
        date: [this.data.date, Validators.required],
        freshness: [this.data.freshness, Validators.required],
        price: [this.data.price, Validators.required],
        comment: [this.data.comment],
      })
    } else {
      this.productForm = this.fb.group({
        productName: ['', Validators.required],
        category: ['', Validators.required],
        date: ['', Validators.required],
        freshness: ['', Validators.required],
        price: ['', Validators.required],
        comment: [''],
      })
    }
  }

  addNewProduct(): void {
    this.apiService.postProduct(this.productForm.value).subscribe({
      next: (res) => {
        alert('Product Added Successfully !!!')
        this.productForm.reset()
        this.dialogRef.close(res)
      },
      error: (err) => {
        console.log(err.message)
        alert('Error while adding the product')
      },
    })
  }

  editExistingProduct(): void {
    this.apiService
      .updateProduct(this.data.id, this.productForm.value)
      .subscribe({
        next: (res) => {
          alert(`Product with id ${this.data.id} is updated successfully !!!`)
          this.productForm.reset()
          this.dialogRef.close(res)
        },
        error: (err) => {
          console.log(err)
          alert('Error while updating the product')
        },
      })
  }

  addProduct(): void {
    if (this.isEditMode) {
      this.editExistingProduct()
    } else {
      this.addNewProduct()
    }
  }
}
