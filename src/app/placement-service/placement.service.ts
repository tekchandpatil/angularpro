import { Injectable } from '@angular/core';
import { Response } from 'selenium-webdriver/http';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class PlacementService {

  result: Response;
  constructor(private http: HttpClient) { 

  }

  public getUsers(){
      return this.http.get('http://localhost:8283/pgDetails/pgList').pipe(map((res: Response)=>{
        console.log("ServicePGLIST=>",res);
          return res;
    }));
  }

  public getUserList(){
     return this.http.get('http://localhost:8283/api/userList').pipe(map((res: Response)=>{
      console.log("Service=>",res);
        return res;
       }));
  }
  public getPortalImages(){
      return this.http.get("http://localhost:8283/api/portalImgList").pipe(map((res: Response)=>{
          return res;
      }));
  }
  
  public getNoticeList(){
    return this.http.get("http://localhost:8283/api/noticeList").pipe(map((res: Response)=>{
      return res;
    }));
  }
 
}
