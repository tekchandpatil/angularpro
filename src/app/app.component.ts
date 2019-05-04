import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlacementService } from './placement-service/placement.service';
import { ReadMeService } from './readMe/read-me.service';
import { UploadImageService } from './upload-image.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
 isSlideImg: boolean=false;
 result: any; 
 portalImages: any;
 noticeList: any;
 portalImagesData: any;
 selectedFile : File; 
 uploadData: any;
 errMsg: any;
 isUpload: boolean=false;
constructor(private router: Router, private placService: PlacementService,private readMe: ReadMeService,private uploadImg: UploadImageService)
{
  
}

  ngOnInit()
  {
   
    

    this.placService.getPortalImages().subscribe((res: any)=>{  
      this.portalImages=res;
     // this.portalImages=this.portalImagesData.image;
      console.log("portalImages==>",this.portalImages);
    });
    this.placService.getNoticeList().subscribe((res: any)=>{  
      this.noticeList=res;
     // this.portalImages=this.portalImagesData.image;
      console.log(this.noticeList);
    });
   
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

  public showDiv(rout)
  {
    if(rout=='app-root'){
      this.router.navigateByUrl("/");
    }
    else{
      this.router.navigateByUrl(rout);
    }
   
    this.isSlideImg=true;
    if(rout=='app-root'){
      this.isSlideImg=false;
    }
  }

  public showNoticeDescription(notice){
    
    this.readMe.setNoticeDetail(notice);
  }
 
}
