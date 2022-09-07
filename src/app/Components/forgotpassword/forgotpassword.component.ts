import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  constructor(private route:Router,private userService:UserService) { }

  
  email!:string;
  newPassword!:string;
  status!:any;

  ngOnInit(): void {
  }

  onlogin(){
    this.userService.forgotPasswordUser(this.email,this.newPassword).subscribe(getData=>{
        this.status = getData;
    });
    if(this.status==1){
      alert("New password updated. Please login again.")
      this.route.navigate(["login"]);
    }
    if(this.status == 0){
      alert("Email is Incorrect.");
  }
}

onClickSignUp() {
  this.route.navigate(["register"]);
}


onClickLogin() {
  this.route.navigate(["login"]);
}

}
