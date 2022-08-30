import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-verifyuser',
  templateUrl: './verifyuser.component.html',
  styleUrls: ['./verifyuser.component.css']
})
export class VerifyuserComponent implements OnInit {

  constructor(private router: Router, private userService: UserService) { }

  email!: string;

  otp!: number;

  status: any;

  userId!: any


  token!: string;
  ngOnInit(): void {

  }

  onClickSubmit() {

    this.userService.loginUser(this.email, this.otp).subscribe((getData: any) => {
      this.status = getData;
    });
    this.router.navigate(["home", this.token]);
  }


  onClickVerifyOtp() {

    this.userService.verifyOtp(this.email, this.otp).subscribe((getData: any) => {
      this.status = getData;
    });

    if (this.status == 1) {
      alert(" Verification sucussfull, Redirecting to Login Page.");
      this.router.navigate(["login"]);
    }
    if (this.status == 0) {
      console.log("invalid user email");
      alert("We cannot find an account with that email address.")
    }
    if (this.status == 2) {
      console.log("Invalid Otp code. Check your email For the Otp.");
      alert("Invalid Otp code. Check your email For the Otp.");
    }
  }

  onClickRedirectToLogin() {
    this.router.navigate(["login"]);
  }

}
