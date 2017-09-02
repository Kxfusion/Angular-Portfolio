import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const projects = [
      { id: 1, name: 'Searching for X' },
      { id: 2, name: 'Python Fractal' },
      { id: 3, name: 'Weather App' },
      { id: 4, name: 'Movie Trailer' },
      { id: 5, name: 'Responsive Blog' }  
    ];
    return{projects};
  }
}