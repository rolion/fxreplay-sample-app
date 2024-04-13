import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common'
import { HighligthDirective } from "../../directive/highligth.directive"

@Component({
  selector: 'app-chips',
  standalone: true,
  imports: [CommonModule, HighligthDirective],
  templateUrl: './chips.component.html',
  styleUrl: './chips.component.css'
})
export class ChipsComponent {

  @Input() value:number = 0 ;
  @Input() isSelected = false

  @Output() percentageSelected = new EventEmitter<number>();


  emitSelection(){
    // this.isSelected = !this.isSelected
    this.percentageSelected.emit(this.value)
    console.log('emit ', this.value)
  }

}
