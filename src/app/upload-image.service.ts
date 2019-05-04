import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UploadImageService {

  constructor(private http:HttpClient) { }

  public uploadImage(data){
    const req = new HttpRequest('POST', 'http://localhost:8283/api/portalImgSave', data, {
      reportProgress: true,
      responseType: 'text'
    });
 
    return this.http.request(req);
  }



}
