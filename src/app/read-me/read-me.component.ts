import { Component, OnInit } from '@angular/core';
import { ReadMeService } from '../services/readme-service/read-me.service';

@Component({
  selector: 'app-read-me',
  templateUrl: './read-me.component.html',
  styleUrls: ['./read-me.component.css']
})
export class ReadMeComponent implements OnInit {

  event_date: any;
  event_description: any;
  event_name: any;
  constructor(private readMeService:ReadMeService) { }

  ngOnInit() {
    this.event_date = sessionStorage.getItem("event_date");
    this.event_description = sessionStorage.getItem("event_description");
    this.event_name = sessionStorage.getItem("event_name");
  }
    
}
