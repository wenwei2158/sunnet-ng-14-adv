import { Component, OnInit } from '@angular/core';
import { chartAreaDemo } from '../chartAreaDemo';
import { chartPieDemo } from '../chartPieDemo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    chartAreaDemo();
    chartPieDemo();
  }
  goToTables1(){
    this.router.navigateByUrl('/tables/999?name=leon')
  }
  goToTables2(){
    this.router.navigate(['/tables',998, {meta:true}],{
      skipLocationChange:true,
      queryParams:{
        name:'leon'
      }
    })
  }

}
