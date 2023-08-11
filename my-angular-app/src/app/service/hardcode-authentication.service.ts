import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HardcodeAuthenticationService {
  constructor() {}

  authentication(user: string, pass: string) {
    if (pass === '123') {
      sessionStorage.setItem('authenticaterUser', user);
      return true;
    }
    return false;
  }

  isLoggedUser() {
    let user1 = sessionStorage.getItem('authenticaterUser');
    return !(user1 === null);
  }

  logout() {
    sessionStorage.removeItem(`authenticaterUser`);
  }
}
