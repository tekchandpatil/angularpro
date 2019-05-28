import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReadMeService {

  constructor() { }

 public setNoticeDetail(noticeDetail :any){
   sessionStorage.setItem("event_date",noticeDetail.event_date);
   sessionStorage.setItem("event_description",noticeDetail.event_description);
   sessionStorage.setItem("event_name",noticeDetail.event_name);

 }
}
