import { Component, OnInit } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table'

import { Product } from '../../../interfaces/Product'
import { ApiService } from '../../../services/api.service'
import { MatDialog } from '@angular/material/dialog'
import { AddProductComponent } from '../add-product/add-product.component'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  displayedColumns: string[] = [
    'name',
    'category',
    'price',
    'date',
    'status',
    'actions',
  ]
  productsList: Array<Product> = []
  dataSource!: MatTableDataSource<Product>

  constructor(private apiService: ApiService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getProducts()
  }

  getProducts(): void {
    this.apiService.getAllProducts().subscribe((products) => {
      this.productsList = products
      this.dataSource = new MatTableDataSource<Product>(this.productsList)
      console.log(this.productsList)
    })
  }

  editProduct(id: number): void {
    let productwithId: Product
    this.apiService.getProduct(id).subscribe({
      next: (res) => {
        productwithId = res
        this.dialog.open(AddProductComponent, {
          width: '40%',
          data: productwithId,
        })
        this.dialog.afterAllClosed.subscribe(() => this.getProducts())
      },
      error: (err) => console.log(err),
    })
  }

  deleteProduct(id: number): void {
    this.apiService.deleteProduct(id).subscribe({
      next: (res) => {
        alert(`Product with id ${id} is successfully deleted !`)
        this.getProducts()
      },
      error: (err) => console.log(err.message),
    })
  }
}
