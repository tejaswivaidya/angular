import { Component, OnInit, ɵConsole } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-service-demo',
  templateUrl: './service-demo.component.html',
  styleUrls: ['./service-demo.component.scss']
})
export class ServiceDemoComponent implements OnInit {
Employee=[];
  constructor(private loginservice: LoginService) { }

  ngOnInit() {
    console.log(this.loginservice.getData());

  }
fetchData(){

this.loginservice.getEmployee()
.subscribe((result : any)=>{
  console.log(result);
  this.Employee=result;
});
    
  }
}

