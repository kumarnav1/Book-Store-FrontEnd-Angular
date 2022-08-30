import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserRegistrationModel } from 'src/app/Model/user-registration-model';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private router: Router, private service: UserService) { }

  userModel: UserRegistrationModel = new UserRegistrationModel("", "", "", "","", new Date,new Date);

  ngOnInit(): void {
  }

  onClickSaveModelRedirectToHome() {
    this.service.registerUser(this.userModel).subscribe((getData: any) => {
    });
    console.log(this.userModel);
    this.router.navigate(["verfication"]);
  }

  loginPage() {
    this.router.navigate(["login"]);
  }

}
