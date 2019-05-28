import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../services/user-login-service/user-login.service';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  public userName : string;
  public password : string;
  public login : any;
  public errorMsg: string = "";
  public isAdminLogin : boolean = true;
  public isStudentLogin: boolean = true;
  constructor(public userLoginService :UserLoginService,private route: Router) { }

  ngOnInit() {
  }

  onLogin(){
    var data = {"userName": this.userName, "password": this.password}; 
     this.userLoginService.onLogin(data).subscribe((res: any)=>{
       if(res != "" || res != undefined){
          this.login = res;
            if(this.login.userType == "admin"){
              this.isAdminLogin = false;
            }
            else{
              this.isStudentLogin =false;
            }
            sessionStorage.setItem("user",this.login);
            this.route.navigateByUrl('/app-admin-login');
       }
       else{
          this.errorMsg = "Please Enter correct Username And password";
       }
    }),catchError(error=> of(console.log("Error in Login")));
  }

}
