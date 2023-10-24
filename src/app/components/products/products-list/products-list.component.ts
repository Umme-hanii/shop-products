import { Component, OnInit } from '@angular/core'
import { MatTableDataSource } from '@angular/material/table'

import { Product } from '../../../interfaces/Product'
import { ApiService } from '../../../services/api.service'

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'category', 'price', 'date', 'status']
  productsList: Array<Product> = []
  dataSource!: MatTableDataSource<Product>

  constructor(private apiService: ApiService) {}

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
}
