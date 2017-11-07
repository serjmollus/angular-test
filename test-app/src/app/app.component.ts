import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

declare var swal: any;



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'app';

  constructor(private userService: UserService, private router:Router){
    userService.loginSource$.subscribe(user => {
      if (user === undefined){
        swal("Login Error!", "Invalid credentials", "warning");
      }
      else{
        console.log("Usuario logeado "+ user);router.navigate(['/home',user.id])
      }
    });
  }

  ngOnInit():void{
    console.log("On init");
    localStorage.clear();
  }
}
