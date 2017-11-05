import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../persistence/user';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class UserService{

    private usersUrl = 'api/users';

    private loginSource = new Subject<User>();
    loginSource$ = this.loginSource.asObservable();

    constructor(private http: Http){

    }
    
    getUser(id: number):Promise<User>{
        const url = this.usersUrl+"/"+id;
        console.log("Buscamos usuario con id "+id+" en la url " +url);
        return this.http.get(url).toPromise().then(response => response.json() as User);
    }

    userLogin(alias: string, password: string){
        console.log("Entrando en userLogin con usuario "+ alias);
        this.http.get(this.usersUrl).toPromise()
        .then( user =>  {let users = user.json() as User[]; 
                         console.log("Respuesta servicio "+users);
                         let userRetrieved = users.find(userRetrieved => (userRetrieved.alias === alias && userRetrieved.password === password));
                         console.log("Usuario encontrado "+userRetrieved);
                         if (userRetrieved===undefined){
                             console.log("No se encontró el usuario");
                             alert("Usuario y/o password incorrectos");
                         }
                         else{
                            this.loginSource.next(userRetrieved);
                        }})
        .catch(error => console.error("Se jodio"));
        console.log("Adios");
    }


    
}