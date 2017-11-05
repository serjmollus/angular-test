export class User{
    id: number;
    name: string;
    alias: string;
    password: string;

    constructor(id: number, name: string, alias: string, password:string){
        this.id = id;
        this.name = name;
        this.alias = alias;
        this.password = password;
    }

    
}