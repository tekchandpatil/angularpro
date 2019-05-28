import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReadMeService } from './services/readme-service/read-me.service';

import * as $ from 'jquery';
import { PortalService } from './services/portal-service/PortalService.service';
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
constructor(private router: Router, private portalService: PortalService,private readMe: ReadMeService)
{
  
}

  ngOnInit()
  {
    this.portalService.getPortalImages().subscribe((res: any)=>{  
      this.portalImages=res;
      console.log("portalImages==>",this.portalImages);
    });
    
    this.portalService.getNoticeList().subscribe((res: any)=>{  
      this.noticeList=res;
      console.log(this.noticeList);
    });
   
  }
 
  public showNoticeDescription(notice){
     this.readMe.setNoticeDetail(notice);
     this.router.navigateByUrl('app-read-me');
  }
 
}
