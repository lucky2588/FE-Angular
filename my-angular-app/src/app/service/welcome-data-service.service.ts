import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { API_URL } from '../app.constrants';

export class HelloWordBean {
  constructor(public message: string) {}
}
@Injectable({
  providedIn: 'root',
})
export class WelcomeDataServiceService {


  constructor(private http: HttpClient) {}

  executeHelloWorldServiceWithPathVariable(name:string ) {
    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders({
    //     Authorization: basicAuthHeaderString
    //   })
    return this.http.get<any>(
      `${API_URL}/api/v1/public/getMess/${name}`,
      // {headers}
      );
  }
  // createBasicAuthenticationHttpHeader() {
  //   let username = 'thang'
  //   let password = '123'
  //   // dGhhbmc6MTIz
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   return basicAuthHeaderString;
  // }
}
