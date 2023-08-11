import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from '../basic-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpIntercepteBasicAuthService implements HttpInterceptor{


  constructor(
    private basicAuthentication : BasicAuthenticationService
  ) {}

  public intercept(request: HttpRequest<any>, next: HttpHandler){

    // let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    let basicAuthHeaderString = this.basicAuthentication.getAuthenticatedToken()
    let username = this.basicAuthentication.getAuthenticatedUser();
     if(basicAuthHeaderString && username){
      request = request.clone(
        {
            setHeaders:{
              Authorization : basicAuthHeaderString
            }
      }
      )
     }
      return next.handle(request)
  }
}
