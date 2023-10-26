import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { Product } from '../interfaces/Product'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  api = 'http://localhost:3000/'
  constructor(private http: HttpClient) {}

  postProduct(data: Product): Observable<Product> {
    return this.http.post<Product>(`${this.api}productsList`, data)
  }

  getAllProducts(): Observable<Array<Product>> {
    return this.http.get<Product[]>(`${this.api}productsList`)
  }

  getProduct(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.api}productsList/${id}`)
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.api}productsList/${id}`, product)
  }

  deleteProduct(id: number) {
    return this.http.delete<Product>(`${this.api}productsList/${id}`)
  }
}
