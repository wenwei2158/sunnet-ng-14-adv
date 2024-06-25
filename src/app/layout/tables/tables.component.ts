import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  imports:[CommonModule, RouterModule],
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  id:string | null='';
  meta:string | null ='';
  name:string | null ='';
  constructor(private route:ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.meta = this.route.snapshot.paramMap.get('meta')
    this.route.paramMap.subscribe(params =>{
      this.id = params.get('id');
    })

    //this.name = this.route.snapshot.queryParamMap.get('name')
    this.route.queryParamMap.subscribe(params =>{
      this.name = params.get('name');
    })  }

    decNumber(){
      const new_num = Number(this.id) -1;
      this.router.navigate(['/tables',new_num],{
        queryParamsHandling:'merge',
        queryParams:{
          name:'ABC'
        }
      })
    }
}
