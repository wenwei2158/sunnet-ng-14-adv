import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private http: HttpClient, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // console.warn('AuthGuard#canActivate failed to authenticate the user. Redirecting to login page.');
    // return this.http.get<boolean>('/assets/authenticate.json');
    if(!localStorage.getItem('apikey')){
      return this.router.parseUrl('/login?returnUrl='+state.url)
    }else
    return true;

  }

}
