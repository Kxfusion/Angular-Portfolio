import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb(){
    const projects = [
      { id: 1, name: 'Weather App', 
				  P1: 'assets/img/WA1.png', 
					P2: 'assets/img/WA2.png', 
					P3: 'assets/img/WA3.png', 
					P4: 'assets/img/WA4.png'},
      { id: 2, name: 'Searching for X', 
				  P1: 'assets/img/SoX1.png', 
					P2: 'assets/img/SoX2.png', 
					P3: 'assets/img/SoX3.png', 
					P4: 'assets/img/SoX4.png'},
      { id: 3, name: 'Blank',
				  P1: 'assets/img/PF1.png', 
					P2: 'assets/img/PF2.png', 
					P3: 'assets/img/PF3.png', 
					P4: 'assets/img/PF4.png'},
      { id: 4, name: 'Responsive Blog', 
				  P1: 'assets/img/RB1.png', 
					P2: 'assets/img/RB2.png', 
					P3: 'assets/img/RB3.png', 
					P4: 'assets/img/RB4.png'},
      { id: 5, name: 'Python Fractal', 
				  P1: 'assets/img/PF1.png', 
					P2: 'assets/img/PF2.png', 
					P3: 'assets/img/PF3.png', 
					P4: 'assets/img/PF4.png'}					
    ];
    return{projects};
  }
}