import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, Http } from '@angular/http';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ConnectDbService } from './connect-db.service';
import { HomepageComponent } from './homepage/homepage.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { NewproductComponent } from './newproduct/newproduct.component';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { EditUserDetailsComponent } from './edit-user-details/edit-user-details.component';
import { TotalComponent } from './total/total.component';
import { Allpaths } from './url';
import { ProductsCartService } from './products-cart.service';
import { ProductsService } from './products.service';
import { FacebookModule } from 'ng2-facebook-sdk';
import { UserLoginComponent } from './user-login/user-login.component';

export const appRoutes: Routes = [
  {
    path: 'sign-up', component: SignUpComponent

  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: '', component: HomepageComponent
  },
  {
    path: 'cart', component: CartComponent
  },
  {
    path: 'addProduct', component: NewproductComponent
  },
  {
    path: 'logout', component: HomepageComponent
  },
  {
    path: 'editDetails', component: EditUserDetailsComponent
  },
  {
    path: 'total', component: TotalComponent
  },
  {
    path: 'product', component: ProductsComponent
  },
  {
    path: 'userLogin', component: UserLoginComponent
  }



];

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ProductsComponent,
    CartComponent,
    NewproductComponent,
    HeaderLoginComponent,
    EditUserDetailsComponent,
    TotalComponent,
    UserLoginComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FacebookModule.forRoot()
  ],

  providers: [ConnectDbService, Allpaths, ProductsCartService, ProductsService],

  bootstrap: [AppComponent]
})

export class AppModule { }
