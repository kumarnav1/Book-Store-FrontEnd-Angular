import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http:HttpClient) {
  }

  loginUser(email:string, password:any){
   const params = new HttpParams()
               .set('email', email)
               .set('password', password);
   return this.http.get("http://localhost:9090/user/login"+"?email="+email+"&password="+password);
 }


 getUserByUserId(id:any){
   return this.http.get("http://localhost:9090/user/getuserById/"+id);
 
 }

getloginStatus(email:string, password:string){
   return this.http.get("http://localhost:9090/user/logintest?email="+email+"&password="+password);
 }



 verifyOtp(email:string, otp:number){
  return this.http.get("http://localhost:9090/user/verifyotp?email="+email+"&otp="+otp);
} 


 getUserIdByToken(token:any){
   return this.http.get("http://localhost:9090/user/getIdByToken/"+token);
 }
 
 getToken(email:string){
   return this.http.get("http://localhost:9090/user/gettoken/"+email);
 }

 getUserId(email:string){
   return this.http.get("http://localhost:9090/user/getuserid?email="+email);
 }
 
 registerUser(userRegistrationModel:any){
   return this.http.post("http://localhost:9090/user/register",userRegistrationModel);
 }

 forgotPasswordUser(email:string, password:string){
  return this.http.get("http://localhost:9090/user/forgotpassword?email="+email+"&password="+password);
 }

 updateUserRecordById(Id:any,user:any){
   return this.http.put("http://localhost:9090/user/update/"+Id,user);
 }
}
