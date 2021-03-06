import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private http:HttpClient) { }

  public getUserList(user_id : number){
    var data={user_id:user_id};
    return this.http.post('http://localhost:8283/api/userList',data).pipe(map((res: Response)=>{
     console.log("UserProfileService=>",res);
       return res;
      }));
 }

 public updateUser(user: any){
  return this.http.post("http://localhost:8283/api/toUpdateUser",user).pipe(map((resp: Response)=>{
      console.log(resp);
      return resp;
    }));
 }
}
