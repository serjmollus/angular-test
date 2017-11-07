import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { UserService } from '../services/user.service';
import 'rxjs/add/operator/switchMap';
import { User } from '../persistence/user';
import { MenuItem , SharedModule} from 'primeng/primeng';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

    user: User;
    items: MenuItem[];

    constructor(private userService: UserService, private route: ActivatedRoute){

    }

    ngOnInit(){
        this.route.paramMap.switchMap((params: ParamMap) => this.userService.getUser(+params.get('id'))).subscribe(
            user => {console.log("Usuario "+user);this.user = user});

        this.items = [
            {
                label: 'File',
                icon: 'fa-file-o',
                items: [{
                        label: 'New', 
                        icon: 'fa-plus',
                        items: [
                            {label: 'Project',expanded: false},
                            {label: 'Other',expanded: false},
                        ]
                    },
                    {label: 'Open',expanded: false},
                    {label: 'Quit',expanded: false}
                ],
                expanded: false
            } /*,
             {
                label: 'Edit',
                icon: 'fa-edit',
                items: [
                    {label: 'Undo', icon: 'fa-mail-forward', expanded: false},
                    {label: 'Redo', icon: 'fa-mail-reply', expanded: false}
                ],
                expanded: false
            },
            {
                label: 'Help',
                icon: 'fa-question',
                items: [
                    {
                        label: 'Contents',expanded: false
                    },
                    {
                        label: 'Search', 
                        icon: 'fa-search', 
                        items: [
                            {
                                label: 'Text', 
                                items: [
                                    {
                                        label: 'Workspace',expanded: false
                                    }
                                ],expanded: false
                            },
                            {
                                label: 'File',expanded: false
                            }
                    ], expanded: false
                    }
                ],
                expanded: false
            },
            {
                label: 'Actions',
                icon: 'fa-gear',
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa-refresh',
                        items: [
                            {label: 'Save', icon: 'fa-save', expanded: false},
                            {label: 'Update', icon: 'fa-save', expanded: false},
                        ], 
                        expanded: false
                    },
                    {
                        label: 'Other',
                        icon: 'fa-phone',
                        items: [
                            {label: 'Delete', icon: 'fa-minus', expanded: false}
                        ],
                        expanded: false
                    }
                ], 
                expanded: false
            } */
        ];

        

        }
    
    
}