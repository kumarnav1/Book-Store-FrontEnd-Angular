import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './Components/register/register.component';
import { VerifyuserComponent } from './Components/verifyuser/verifyuser.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Components/login/login.component';
import { HomeComponent } from './Components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './Components/cart/cart.component';
import { UserDetailsToPlaceOrderComponent } from './user-details-to-place-order/user-details-to-place-order.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    VerifyuserComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    ForgotpasswordComponent,
    CartComponent,
    UserDetailsToPlaceOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
