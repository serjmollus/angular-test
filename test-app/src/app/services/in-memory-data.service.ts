import { InMemoryDbService } from 'angular-in-memory-web-api';
import { User } from '../persistence/user';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const users: User[] = [
      { id: 0,  name: 'Zero', alias: 'zero@ser.es', password:'zeropass' },
      { id: 11, name: 'Mr. Nice', alias: 'nice@ser.es', password:'nicepass' },
      { id: 12, name: 'Narco', alias: 'narco@ser.es', password:'narcopass' },
      { id: 13, name: 'Bombasto', alias: 'bombasto@ser.es', password:'bombastopass' },
      { id: 14, name: 'Celeritas', alias: 'celeritas@ser.es', password:'celeritaspass' },
      { id: 15, name: 'Magneta', alias: 'magneta@ser.es', password:'magnetapass' },
      { id: 16, name: 'RubberMan', alias: 'rubber@ser.es', password:'rubberpass' },
      { id: 17, name: 'Dynama', alias: 'dynama@ser.es', password:'dynamapass' },
      { id: 18, name: 'Dr IQ', alias: 'iq@ser.es', password:'iqpass' },
      { id: 19, name: 'Magma', alias: 'magma@ser.es', password:'magmapass' },
      { id: 20, name: 'Tornado', alias: 'tornado@ser.es', password:'tornadopass' }
    ];
    console.log("Creada BBDD");
    return {users};
  }
}