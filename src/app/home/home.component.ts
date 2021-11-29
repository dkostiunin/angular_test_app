import { Component, OnInit } from '@angular/core';
import {dates} from '../vars';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  totalAll = dates.total
  totalIncome: number = dates.data.filter(i=>i.type==='income').length
  totalOutcome: number = dates.data.filter(i=>i.type==='outcome').length
  totalLoans: number = dates.data.filter(i=>i.type==='loan').length
  totalInvestments: number = dates.data.filter(i=>i.type==='investment').length

  constructor() {  }

  ngOnInit(): void {
  }

}
