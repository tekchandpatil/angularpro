import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlacementService } from './placement-service/placement.service';
import { ReadMeService } from './readMe/read-me.service';

import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
 
public isSlideImg: boolean=false;
public result: any; 
public portalImages: any;
public noticeList: any;
public portalImagesData: any;
public errMsg: any;
constructor(private router: Router, private placService: PlacementService,private readMe: ReadMeService)
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
