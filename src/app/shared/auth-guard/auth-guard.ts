import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './services/auth.service';
import {of} from 'rxjs';
import { map, catchError } from 'rxjs/operators';

/*
* @name
*
* */
@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  public canActivate(next: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): any {
    return this.authService.isAuthenticated().pipe(
      map(res => {
        return true;
      }),
      catchError(()=>{ 
        this.router.navigateByUrl('/login');
        return of(false);
      })
    );
  }
}
