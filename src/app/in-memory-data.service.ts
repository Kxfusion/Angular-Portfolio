import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const projects = [
      { id: 1, name: 'Searching for X', 
				  P1: 'assets/img/SoX1.png', 
					P2: 'assets/img/SoX2.png', 
					P3: 'assets/img/SoX3.png', 
					P4: 'assets/img/SoX4.png'},
      { id: 2, name: 'Python Fractal', 
				  P1: 'assets/img/PF1.png', 
					P2: 'assets/img/PF2.png', 
					P3: 'assets/img/PF3.png', 
					P4: 'assets/img/PF4.png'},
      { id: 3, name: 'Weather App', 
				  P1: 'assets/img/PF1.png', 
					P2: 'assets/img/PF2.png', 
					P3: 'assets/img/PF3.png', 
					P4: 'assets/img/PF4.png'},
      { id: 4, name: 'Movie Trailer',
				  P1: 'assets/img/PF1.png', 
					P2: 'assets/img/PF2.png', 
					P3: 'assets/img/PF3.png', 
					P4: 'assets/img/PF4.png'},
      { id: 5, name: 'Responsive Blog', 
				  P1: 'assets/img/PF1.png', 
					P2: 'assets/img/PF2.png', 
					P3: 'assets/img/PF3.png', 
					P4: 'assets/img/PF4.png'}  
    ];
    return{projects};
  }
}