import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { RouterModule } from '@angular/router'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MaterialDesignModule } from './modules/material-design.module'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { AddProductComponent } from './components/products/add-product/add-product.component'
import { ApiService } from './services/api.service'
import { ProductsListComponent } from './components/products/products-list/products-list.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AddProductComponent,
    ProductsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [FormBuilder, ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
