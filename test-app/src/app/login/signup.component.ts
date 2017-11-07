import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../persistence/user';
import { Router } from '@angular/router';

declare var swal: any;

@Component({
    selector: 'signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css']
})

export class SignupComponent{
    name: string;
    alias: string;
    password: string;

    constructor(private userService: UserService, private router: Router){}

    submitInfo(){
        if (this.name === undefined || this.alias === undefined || this.password === undefined){
            swal("Sign up error", "All fields are required", "warning");
        }
        else{
            let user = new User(-1, this.name, this.alias, this.password);
            this.userService.addUserWithNewId(user).subscribe(res => {
                    swal("Sign Up", "esoUser created successfully","success"); 
                    this.router.navigate(['/login']);
                }
            );
        }
    }
}