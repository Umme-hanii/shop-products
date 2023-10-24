import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { MaterialDesignModule } from './modules/material-design.module'
import { NavBarComponent } from './components/nav-bar/nav-bar.component'
import { AddProductComponent } from './components/products/add-product/add-product.component'

@NgModule({
  declarations: [AppComponent, NavBarComponent, AddProductComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
    ReactiveFormsModule,
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule {}
