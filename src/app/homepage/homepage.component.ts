import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  public isSlideImg: boolean=false;

  constructor(private router: Router) { }


  
  ngOnInit() {
  }

  // public showDiv(rout)
  // {
  //     this.router.navigateByUrl(rout);
  // }
}
