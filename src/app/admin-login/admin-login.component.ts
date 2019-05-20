import { Component, OnInit } from '@angular/core';
import { UploadImageService } from '../upload-image.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
 public selectedFile : File; 
 public uploadData: any;
 public errMsg: any;
 public isUpload: boolean=false;
  constructor(private uploadImg: UploadImageService) { }

  ngOnInit() {
  }
  public onFileUpload(event){
    this.selectedFile = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.selectedFile);
  }

  public uploadImage()
  {
    const uploadFormData = new FormData();
     uploadFormData.append('file',this.selectedFile);
      
      this.uploadImg.uploadImage(uploadFormData).subscribe((res: any)=>{
        console.log("Service=>",res.body);
        this.errMsg=res.body;
        this.isUpload=true;
        setTimeout(() => {
          this.isUpload=false;
        }, 5000);
      });
  }
}
