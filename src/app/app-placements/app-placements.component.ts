import { Component, OnInit } from '@angular/core';
import { PortalService } from '../services/portal-service/PortalService.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-placements',
  templateUrl: './app-placements.component.html',
  styleUrls: ['./app-placements.component.css']
})
export class AppPlacementsComponent implements OnInit {

  
  
columnDefs: any;
rowData: any;
constructor(private router: Router) { 

}



  ngOnInit() 
  {

  }

}
