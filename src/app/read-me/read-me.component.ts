import { Component, OnInit } from '@angular/core';
import { ReadMeService } from '../readMe/read-me.service';

@Component({
  selector: 'app-read-me',
  templateUrl: './read-me.component.html',
  styleUrls: ['./read-me.component.css']
})
export class ReadMeComponent implements OnInit {

  notice: any;
  constructor(private readMe:ReadMeService) { }

  ngOnInit() {
    this.notice=this.readMe.getNoticeDetail();
  }
    
}
