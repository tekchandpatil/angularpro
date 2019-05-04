import { Component, OnInit } from '@angular/core';
import { UserProfileService } from './user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
 userProfileData: any[];
 isUpdate: boolean = true;
 isChecked: boolean =false;
  constructor(private userProfileService: UserProfileService) { }

  ngOnInit() {
    var user_id=1;
    this.userProfileService.getUserList(user_id).subscribe((res: any)=>{
      
      this.userProfileData=res;
      console.log("this.userProfileData=>",this.userProfileData);
    });
  }
 

  public onUpdate(){
    
    this.userProfileService.updateUser(this.userProfileData).subscribe((res: any)=>{
      
      
      console.log("this.userProfileData=>",this.userProfileData);
    });


    this.isChecked=false;
    this.isUpdate = true;
  }


  public isCheckedForUpdate(){
    if(this.isChecked){
      this.isChecked=false;
      this.isUpdate = true;
    }
    else{
      this.isChecked=true;
      this.isUpdate = false;
    }
  }
}
