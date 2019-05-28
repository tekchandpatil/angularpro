import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { AppSettings } from '../../util/AppSettings';

@Injectable({
  providedIn: 'root'
})
export class UserRegiService {

  constructor(private http:HttpClient) { }


  public getUserTypes(){
     return this.http.get(AppSettings.API_URL+"api/userTypeList").pipe(map((resp: Response)=>{
         console.log(resp);
     return resp;
      }));
  }

  public toSaveUserRegi(data){
    return this.http.post(AppSettings.API_URL+"api/toSaveUserRegi",data).pipe(map((resp: Response)=>{
      console.log(resp);
      return resp;
    }));
  }

}
