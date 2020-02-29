import { Injectable } from '@angular/core'
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

private Data:string;

  constructor(private httpclient: HttpClient ) { }

  setData(newData){
    this.Data = newData;
  }
  getData(){
    return this.Data;
  }
  getEmployee(){
    return this.httpclient.get('http://dummy.restapiexample.com/api/v1/employees');
  }
}
