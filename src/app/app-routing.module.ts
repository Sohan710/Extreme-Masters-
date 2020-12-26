import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent} from './main-page/main-page.component';
import { ProductDetailsComponent } from './productdetalis/productdetalis.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { CartComponent } from './mycart/mycart.component';
import { SupportComponent } from './support/support.component';
import { SoftwareComponent } from './software/software.component';
import { ProductComponent } from './product/product.component';


const appRoutes:Routes =
[
    { path: '', redirectTo: '/main', pathMatch: 'full' },
    {path:'main',component:MainPageComponent},
    {path:'product-detail/:id',component:ProductDetailsComponent},
    {path:'login',component:LoginComponent},
    {path:'register',component:RegistrationComponent},
    {path:'mycart',component:CartComponent},
    {path:'support',component:SupportComponent},
    {path:'software',component:SoftwareComponent},
    {path:'product',component:ProductComponent}


];


@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports :[RouterModule]
})

export class AppRoutingModule{}
