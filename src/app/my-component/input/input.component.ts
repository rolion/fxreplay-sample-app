import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
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
export class InputComponent implements OnInit {

  
  faPercent = faPercent
  faDollarSign = faDollarSign 

  @Input() labelText: string =''
  @Input() inputValue?: number
  @Input() icon='porcent'
  @Input() sendValueChange = false
  @Output() newInput = new EventEmitter<number>();
  ngOnInit(): void {
    
  }

  isNumeric (val: string) : boolean  {
    return !isNaN(Number(val));
 }

  valueChange(event: any) {
    let value = event.target.value
    if (this.sendValueChange == true && this.isNumeric(value)){
      this.newInput.emit(value)
    }
  }
}
