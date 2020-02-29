import { Component,
   OnInit, 
   Input, 
   Output, 
   EventEmitter
   } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  @Input() parentData: string;
  @Output() childData = new EventEmitter<string>();

  content:string = "hello"

  constructor() { } 

  ngOnInit() {

    // this.childData.emit(this.content);
  }
  
display(){
  console.log(this.content);
  this.childData.emit("test");;
  
}
}
