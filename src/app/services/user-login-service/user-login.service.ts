import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppSettings } from '../../util/AppSettings';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private http: HttpClient) { }

  onLogin(data){
    return this.http.post(AppSettings.API_URL+'api/getLogin',data).pipe(map((res: Response)=>{
      console.log("getLogin=>",res);
        return res;
       }));
  }

  public getUserList(){
    return this.http.get(AppSettings.API_URL+'userList').pipe(map((res: Response)=>{
     console.log("Service=>",res);
       return res;
      }));
 }
 
}
