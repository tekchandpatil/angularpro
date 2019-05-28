import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PortalService } from '../services/portal-service/PortalService.service';

@Component({
  selector: 'app-pgdetails',
  templateUrl: './pgdetails.component.html',
  styleUrls: ['./pgdetails.component.css']
})
export class PgdetailsComponent implements OnInit {

columnDefs: any;
rowData: any;
constructor(private router: Router,private portalService: PortalService) { 

}

  ngOnInit() {
    this.columnDefs = [
      {headerName: 'Id', field: 'id'},
      {headerName: 'Broker Name', field: 'broker_name'},
      {headerName: 'Broker Mobile No', field: 'broker_mob_no'},
      {headerName: 'Location', field: 'location'}
    ];
    
    this.portalService.getPgList().subscribe((res: any)=>{
      console.log(res);
      this.rowData=res;
    });
  }

}
