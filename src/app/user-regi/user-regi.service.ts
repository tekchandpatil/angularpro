import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserRegiService {

  constructor(private http:HttpClient) { }


  public getUserTypes(){
     return this.http.get("http://localhost:8283/api/userTypeList").pipe(map((resp: Response)=>{
         console.log(resp);
     return resp;
      }));
  }

  public toSaveUserRegi(data){
    return this.http.post("http://localhost:8283/api/toSaveUserRegi",data).pipe(map((resp: Response)=>{
      console.log(resp);
      return resp;
    }));
  }

}
