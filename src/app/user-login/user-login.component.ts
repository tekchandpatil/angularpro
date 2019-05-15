import { Component, OnInit } from '@angular/core';
import { UserLoginService } from './user-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  public userName : string;
  public password : string;
  constructor(public userLoginService :UserLoginService) { }

  ngOnInit() {
  }

  onLogin(){
    var data = {"userName": this.userName, "password": this.password}; 
     this.userLoginService.onLogin(data).subscribe((res: any)=>{
        console.log(res);
    });
  }

}
