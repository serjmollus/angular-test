import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../services/user.service';
import 'rxjs/add/operator/switchMap';
import { User } from '../persistence/user';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

    user: User;

    constructor(private userService: UserService, private route: ActivatedRoute){

    }

    ngOnInit(){
        this.route.paramMap.switchMap((params: ParamMap) => this.userService.getUser(+params.get('id'))).subscribe(
            user => {console.log("Usuario "+user);this.user = user});
    }
}