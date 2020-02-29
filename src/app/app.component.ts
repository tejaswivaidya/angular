import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'my-app';
  content = "welcome to Angular";
  firstName = "Nagpur";
  isDisable = true;

  constructor(private loginservice:LoginService){}

display(){
  // this.isDisable === true? this.isDisable = false : this.isDisable = true; turnary operator
  this.isDisable =!this.isDisable;
}
ngOnInit(){

  this.loginservice.setData("pune");
}
detectData(value:string){
console.log(value);
}   

}