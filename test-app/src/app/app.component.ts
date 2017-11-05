import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'app';

  constructor(private userService: UserService, private router:Router){
    userService.loginSource$.subscribe(user => {console.log("Usuario logeado "+ user);router.navigate(['/home',user.id])});
  }

 
}
