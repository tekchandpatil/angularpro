import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReadMeService {

  notice : any;
  constructor(private router: Router) { }

 public setNoticeDetail(notice){
    this.notice=notice;
    this.router.navigateByUrl("app-read-me");
  }

  public getNoticeDetail(){
    return this.notice;
  }
}
