import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
  
})
export class ParentComponentComponent {
like : number=undefined;
dislike:number=undefined; 
clear : boolean = false;

  handleClear(){
    this.like = 0;
    this.dislike = 0;
    this.clear = true;
  }
}
