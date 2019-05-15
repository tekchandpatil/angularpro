import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {

  constructor(private http: HttpClient) { }

  onLogin(data){
    return this.http.post('http://localhost:8283/api/getLogin',data).pipe(map((res: Response)=>{
      console.log("getLogin=>",res);
        return res;
       }));
  }
}
