import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-regions2',
  templateUrl: './regions2.component.html',
  styleUrls: ['./regions2.component.css']
})
export class Regions2Component implements OnInit {

  constructor(private httpService: HttpService,
    private router: Router) { }

  ngOnInit(): void {
  }
  goRegion(region: any){
    this.router.navigate(['countries',region]);


  }

}
