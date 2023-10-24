import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  api = 'http://localhost:3000/'
  constructor(private http: HttpClient) {}

  postProduct(data: any) {
    return this.http.post<any>(`${this.api}productsList`, data)
  }
}
