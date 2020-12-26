import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ProductDetailsComponent } from './productdetalis/productdetalis.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
// import { RecipeStartComponent } from './recipe-list/recipe-start/recipe-start.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductServices } from './product.service';
import { CartComponent } from './mycart/mycart.component';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { CartServices } from './cart.service';
import { NewOrderServices } from './neworder.service';
import { SupportComponent } from './support/support.component';
import { SoftwareComponent } from './software/software.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: 
  [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    ProductDetailsComponent,
    LoginComponent,
    RegistrationComponent,
    // RecipeStartComponent,
    CartComponent,
    SupportComponent,
    SoftwareComponent,
    ProductComponent
  ],
  imports: 
  [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
  ],
  providers: [ProductServices,CartServices,NewOrderServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
