import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog'

import { ApiService } from '../../../services/api.service'

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {
  freshnessList = ['New', 'Second Hand', 'Refurbished']
  productForm!: FormGroup

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private dialogRef: MatDialogRef<AddProductComponent>
  ) {}

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
}
