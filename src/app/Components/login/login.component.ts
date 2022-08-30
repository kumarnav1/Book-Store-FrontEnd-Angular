import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  email!: string;

  password!: string;

  status: any;
 
  userId!: any

  token!: string;

  ngOnInit(): void {

  }

  submitTestLoginStatus() {

    this.userService.getloginStatus(this.email, this.password).subscribe((getData: any) => {
      this.status = getData;
    });

    if (this.status == 3) {
      console.log("status fine");
      this.userService.getToken(this.email).subscribe((data: any) => {
        this.token = data.data;
        console.log(this.token);
        console.log("toekn fetched done");
        alert("Login sucussful, Redirecting to Home page.");
        this.router.navigate(["home", this.token]);
      });
    }
    if (this.status == 0) {
      console.log("We cannot find an account with that email address.");
      alert("We cannot find an account with that email address.")
    }
   
    if(this.status == 1)
    alert("You are not verified. Please do the Verification First.");

    if (this.status == 2) {
      console.log("Invalid password");
      alert("Invalid password");
    }
  }

  onClickRedirectToRegister() {
    this.router.navigate(["register"]);
  }

  onClickRedirectToVerify() {
    this.router.navigate(["verfication"]);
  }

  onClickGotoForgotPassword() {
    this.router.navigate(["forgotpassword"]);
  }
}