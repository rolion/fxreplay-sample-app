import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChipsComponent } from './my-component/chips/chips.component';
import { InputComponent } from './my-component/input/input.component'
import { CommonModule } from '@angular/common'
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChipsComponent, CommonModule, FontAwesomeModule, InputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit  {
  
  faPercent = faPercent;
  balanceType: string = "initial";
  defaultPercentages:  {value:number, isSelected: boolean}[] = [
    {'value':0.30, 'isSelected': false}, 
    {'value':0.50, 'isSelected': false}, 
    {'value':0.70, 'isSelected': true}, 
    {'value':1.00, 'isSelected': false}, 
    {'value':2.00, 'isSelected': false}, 
    {'value':3.00, 'isSelected': false}, ]
  riskPercent: number = 0.70;

  initialBalance: number = 1000;
  currentBalance: number = 2000;
  riskAmount?: number

  ngOnInit(): void {
    this.calculateRiskAmount()
  }

  onBalanceSelected(type: string){
    this.balanceType = type
    this.calculateRiskAmount()
  }

  selectPercentage(percentage: number){
    this.defaultPercentages = this.defaultPercentages.map((item)=>{
      if (item.value == percentage){
        item.isSelected = true
      }else {
        item.isSelected = false
      }
      return item
    })
    this.riskPercent= percentage;
    this.calculateRiskAmount()
  }

  calculateRiskAmount(){
    let amount= this.balanceType=='initial'? this.initialBalance: this.currentBalance;
    this.riskAmount = (amount * this.riskPercent)/100
    console.log('riskamount ', this.riskAmount)
  }
  
}
