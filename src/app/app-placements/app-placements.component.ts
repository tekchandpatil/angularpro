import { Component, OnInit } from '@angular/core';
import { PlacementService } from '../placement-service/placement.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-placements',
  templateUrl: './app-placements.component.html',
  styleUrls: ['./app-placements.component.css']
})
export class AppPlacementsComponent implements OnInit {

  
  
columnDefs: any;
rowData: any;
constructor(private router: Router,private placementService: PlacementService) { 

}



  ngOnInit() 
  {

    this.columnDefs = [
      {headerName: 'Id', field: 'id'},
      {headerName: 'Broker Name', field: 'broker_name'},
      {headerName: 'Broker Mobile No', field: 'broker_mob_no'},
      {headerName: 'Location', field: 'location'}
  ];
    console.log("PlacementController");
    this.placementService.getUsers().subscribe((res: any)=>{
      console.log(res);
      this.rowData=res;
    });
  }

}
