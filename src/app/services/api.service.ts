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

  getAllProducts() {
    return this.http.get<Product[]>(`${this.api}productsList`)
  }
}
