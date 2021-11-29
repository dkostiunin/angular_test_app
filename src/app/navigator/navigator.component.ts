import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {dates} from '../vars';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {

  condition0: boolean=false;
  condition1: boolean=false;
  condition2: boolean=false;
  condition3: boolean=false;  
  items: { name: string, num: number }[] = [];

  constructor(private route: ActivatedRoute){

   this.route.queryParams.subscribe(params=>{
      console.log(dates.total);
      
      this.condition0=false;
      this.condition1=false;
      this.condition2=false;
      this.condition3=false; 
      this.items=[]

      if(params["tab"]==0) { 
        this.condition0=true 
        dates.data.filter(i=>i.type==='income').forEach(j=>{
          let n:string=j.name.first+' '+j.name.last
          this.items.push({name:n,num:n.length})
        })
      } else if(params["tab"]==1) { 
        this.condition1=true 
        dates.data.filter(i=>i.type==='outcome').forEach(j=>{
          let n:string=j.name.first+' '+j.name.last
          this.items.push({name:n,num:n.length})
        })
      } else if(params["tab"]==2){ 
        this.condition2=true
        dates.data.filter(i=>i.type==='loan').forEach(j=>{
          let n:string=j.name.first+' '+j.name.last
          this.items.push({name:n,num:n.length})
        })
      } else if(params["tab"]==3){ 
        this.condition3=true
        dates.data.filter(i=>i.type==='investment').forEach(j=>{
          let n:string=j.name.first+' '+j.name.last
          this.items.push({name:n,num:n.length})
        })
      }

    })
  }

  ngOnInit(): void {
  }

}
