import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { API_URL } from '../app.constrants';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';
import { BasicAuthenticationService } from '../service/basic-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username = 'thang'
  password = ''
  errorMessage = 'Invalid Credentials'
  invalidLogin = false

  //Router
  //Angular.giveMeRouter
  //Dependency Injection
  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodeAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit() {
  }

  // handleLogin() {
  //   // console.log(this.username);
  //   //if(this.username==="in28minutes" && this.password === 'dummy') {
  //   if(this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
  //     //Redirect to Welcome Page
  //     this.router.navigate(['welcome', this.username])
  //     this.invalidLogin = false
  //   } else {
  //     this.invalidLogin = true
  //   }
  // }

  handleBasicAuthLogin() {
    // console.log(this.username);
    //if(this.username==="in28minutes" && this.password === 'dummy') {
    this.basicAuthenticationService.executeAuthenticationService(this.username, this.password)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['welcome', this.username])
            this.invalidLogin = false
          }
        )
  }

  // handleJWTAuthLogin() {
  //   this.basicAuthenticationService.executeJWTAuthenticationService(this.username, this.password)
  //       .subscribe(
  //         data => {
  //           console.log(data)
  //           this.router.navigate(['welcome', this.username])
  //           this.invalidLogin = false
  //         },
  //         error => {
  //           console.log(error)
  //           this.invalidLogin = true
  //         }
  //       )
  // }

}
