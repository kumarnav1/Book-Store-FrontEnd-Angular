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

  status!: number;
  constructor(private router: Router, private service: UserService) { }

  userModel: UserRegistrationModel = new UserRegistrationModel("", "", "", "","", new Date,new Date);

  ngOnInit(): void {
  }

  onClickSaveModelRedirectToHome() {
    this.service.registerUser(this.userModel).subscribe((getData: any) => {
      console.log(getData.data);
    this.status = getData.data;
    if(this.status == 1){
      alert("This Email id has Already been Taken. Enter new Email Id and try Again.");
    }
   if(this.status == 0){
    alert("Registraion done. Please Check you mail for otp and Verify the Account.");
    this.router.navigate(["verfication"]);
  }
    });
  }


  loginPage() {
    this.router.navigate(["login"]);
  }

}
