import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthGuard implements CanActivate{

    router: Router;
    constructor(private routerNav: Router){
        this.router = routerNav;
    }

    canActivate(route: ActivatedRouteSnapshot, routerState: RouterStateSnapshot){
        let id =  localStorage.getItem('userLogged');
        let idRoute = route.paramMap.get('id');
        if (id === idRoute){
            return true;
        }
        else{
            alert("You need to login");
            this.router.navigate(['']);
            return false;
        }
    }
}