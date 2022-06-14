import { LoginService } from '../login/login.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, Route } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private _authService: LoginService, private _router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const checkUserAuthenticity = this._authService.isAuthenticated();
    if (checkUserAuthenticity.validUser && !checkUserAuthenticity.redirectTologin) {
      return true;
    }
    if (!checkUserAuthenticity.validUser && !checkUserAuthenticity.redirectTologin) {
      return false;
    }
    if (!checkUserAuthenticity.validUser && checkUserAuthenticity.redirectTologin) {
      this._router.navigate(['/login'])
        .then(() => {
          window.location.reload();
        });;
      return false;
    }

  }

}
