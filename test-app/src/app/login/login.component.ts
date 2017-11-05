import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { UserService } from '../services/user.service';


@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.css']
})

export class LoginComponent{

    alias: string ="";
    password: string="";

    constructor(private userService: UserService){}

    doLogin():void{
        this.userService.userLogin(this.alias, this.password);
    }

} 