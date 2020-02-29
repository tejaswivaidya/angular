import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.scss']
})
export class DirectiveComponent implements OnInit {

validUser : boolean = true;
  studentList =[
    {name : 'Reshma' , id : 27},
    {name : 'Raghu' , id : 28},
    {name : 'Ravi' , id : 29},
    {name : 'Rahul' , id : 30},
    {name : 'Sneha' , id : 31},
    {name : 'Ashu' , id : 32},
    {name : 'Megha' , id : 33}

  ]

  constructor() { }

  ngOnInit() {
  }

}
