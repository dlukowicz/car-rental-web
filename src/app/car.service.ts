import { Injectable } from '@angular/core';
import { Car } from './car';
import { Cars } from './mock-cars';

@Injectable({
  providedIn: 'root'
})
export class CarService {


  getCars(): Car[] {
    return Cars;
  }

  rentCar(car: Car) {
    console.log('service rent car')
  }
}
