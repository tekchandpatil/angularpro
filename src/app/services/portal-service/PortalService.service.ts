import { Injectable } from '@angular/core';
import { Response } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppSettings } from '../../util/AppSettings';


@Injectable({
  providedIn: 'root'
})
export class PortalService {

  result: Response;
  constructor(private http: HttpClient) { 

  }

  public getPgList(){
      return this.http.get(AppSettings.API_URL+'pgDetails/pgList').pipe(map((res: Response)=>{
        console.log("ServicePGLIST=>",res);
          return res;
    }));
  }

 
  public getPortalImages(){
      return this.http.get(AppSettings.API_URL+"portal/portalImgList").pipe(map((res: Response)=>{
          return res;
      }));
  }
  
  public getNoticeList(){
    return this.http.get(AppSettings.API_URL+"portal/noticeList").pipe(map((res: Response)=>{
      return res;
    }));
  }
 
}
