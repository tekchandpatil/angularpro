import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRegiService } from '../services/user-regi-service/user-regi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-regi',
  templateUrl: './user-regi.component.html',
  styleUrls: ['./user-regi.component.css']
})
export class UserRegiComponent implements OnInit {

  constructor(private http: HttpClient,private userRegi:UserRegiService,private router: Router) { }

usertypeList: any[];
uList:any[];
firstName: string;
middleName: string;
lastName: string;
father_MobNo: string;
mobileNo: string;
emailId: string;
dob: string;
password: string;
userName: string;
pincode: string;
houseNumber: string;
landMark: string;
street: string;
state: string;
city: string;
userType: string;

  ngOnInit() {
    
    this.userRegi.getUserTypes().subscribe((res: any)=>{
        this.usertypeList=res;
        console.log("usertypeList",this.usertypeList);
    });
  }

  public toSaveUser(){
    var userRegi={"firstName":this.firstName,"middleName":this.middleName,"lastName":this.lastName,
                  "emailId":this.emailId,"userName":this.userName,"password":this.password,
                  "dob":this.dob,"father_MobNo":this.father_MobNo,"mobileNo":this.mobileNo,
                  "usertype":this.userType
                 };

    var address={"pincode":this.pincode,"houseNumber":this.houseNumber,
                 "landMark":this.landMark,"state":this.state,"city":this.city,
                 "street":this.street
                };
    var data={"userRegi":userRegi,"address":address};

    console.log("UserRegidata=>"+data);

             this.userRegi.toSaveUserRegi(data).subscribe((res : any)=>{
               console.log(res);
             });

  }



}
