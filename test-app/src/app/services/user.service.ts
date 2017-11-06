import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { User } from '../persistence/user';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';



@Injectable()
export class UserService{

    private usersUrl = 'api/users';

    private loginSource = new Subject<User>();
    loginSource$ = this.loginSource.asObservable();

    private userSource = new Subject<User[]>();
    userSource$ = this.userSource.asObservable();
    

    constructor(private http: Http){

    }

    getUsers(): Observable<User[]>{
        console.log("Entra en getUsers");
        let users = this.http.get(this.usersUrl).map((response: Response) => response.json() as User[]).catch(error =>  Observable.throw(error));
        return users;
        
    }
    
    getUser(id: number):Observable<User>{
       const url = this.usersUrl+"/"+id;
       console.log("Buscamos usuario con id "+id+" en la url " +url);
      
       return this.http.get(url).map((response: Response) => response.json() as User);
    }

    userLogin(alias: string, password: string){
        this.getUsers().subscribe((response: User[]) => {
                                                        let users = response; 
                                                        console.log("Respuesta servicio "+users);
                                                        let userRetrieved = users.find(userRetrieved => (userRetrieved.alias === alias && userRetrieved.password === password));
                                                        console.log("Usuario encontrado "+userRetrieved);
                                                        if (userRetrieved===undefined){
                                                            console.log("No se encontró el usuario");
                                                            alert("Usuario y/o password incorrectos");
                                                        }
                                                        else{
                                                            localStorage.setItem('userLogged',""+userRetrieved.id);
                                                            this.loginSource.next(userRetrieved);
                                                        }
                                                        });
        
    }

    addUser(user: User):Observable<User>{
        console.log("Add user next id");
        
        return this.http.post(this.usersUrl,JSON.stringify(user)).map((response: Response) => response.json() as User);
        
    }

    nextId(users: User[]):number{
        console.log("Next id");
        return users[users.length-1].id+1;       
    }
    

    

    
}