import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotpasswordComponent } from './Components/forgotpassword/forgotpassword.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { VerifyuserComponent } from './Components/verifyuser/verifyuser.component';

const routes: Routes = [  
{path:'' ,redirectTo:'/login', pathMatch:'full'},
{path:"login", component:LoginComponent},
{path:"register",component:RegisterComponent},
{path:"home",component:HomeComponent},
{path:"forgotpassword",component:ForgotpasswordComponent},
{path:"verfication", component:VerifyuserComponent},
{path:"home/:token",component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
