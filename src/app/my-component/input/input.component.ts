import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { faPercent, faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit, OnChanges {
  
  faPercent = faPercent
  faDollarSign = faDollarSign 

  @Input() labelText: string =''
  @Input() inputValue?: number
  @Input() icon='porcent'
  ngOnChanges(changes: SimpleChanges): void {
    if (changes){
      console.log('changes', changes)
    }
  }
  ngOnInit(): void {
    
  }
}
