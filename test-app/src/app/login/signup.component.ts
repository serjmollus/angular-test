import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../persistence/user';
import { Router } from '@angular/router';



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
            alert("All fields are required");
        }
        else{
            console.log("vamos palla");
            let user = new User(-1, this.name, this.alias, this.password);
            this.userService.addUserWithNewId(user).subscribe(res => {
                    alert("User created successfully"); 
                    this.router.navigate(['/login']);
                }
            );
        }
    }
}