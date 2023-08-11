import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { HardcodeAuthenticationService } from './hardcode-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouterGuardService implements CanActivate{

  constructor(private hardcodeAuthetication : HardcodeAuthenticationService,
    public router : Router

    ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.hardcodeAuthetication.isLoggedUser())
       return true;
       this.router.navigate(["login"])
       return false;
  }
}
