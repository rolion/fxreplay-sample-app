import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  balanceType: string = "initial";
  defaultPercentages: number [] = [0.3, 0.5, 0.7, 1.00, 2.00, 3.00]
  riskPercent?: number;

  initialBalance: number = 1000;
  currentBalance: number = 2000;

  onBalanceSelected(selected: any){

    console.log(selected)
  }
  
}
