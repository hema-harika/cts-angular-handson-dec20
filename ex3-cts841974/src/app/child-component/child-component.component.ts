import { Component,EventEmitter , Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
 
})
export class ChildComponentComponent {

  @Input
  clearLike:number =undefined;
  @Input
  clearDislike :number=undefined;

  counter :number=1;
  counter1 :number=1;
  @Output()
  childCounter : EventEmitter<number>=new EventEmitter<number>();

  @Output()
  childCounter1 : EventEmitter<number>=new EventEmitter<number>();

  handleClick(){
    if(this.clearLike == 0){
      this.counter = 1;
      this.clearLike = undefined;
    }
    this.childCounter.emit(this.counter++);
  }
  
  

  handleClickd(){
    if(this.clearDislike == 0){
      this.counter1 = 1;
      this.clearDislike = undefined;
    }
    this.childCounter1.emit(this.counter1++);
  }

}
