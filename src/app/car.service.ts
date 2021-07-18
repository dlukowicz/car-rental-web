import { Injectable } from '@angular/core';
import { Car } from './car';
import { Cars } from './mock-cars';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {Reservation} from "./reservation";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  endpoint = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

  // getCars(): Car[] {
  //
  //
  //   return Cars;
  // }

   headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }

  // requestOptions = {
  //   headers: new Headers(this.headerDict),
  // };


  getCars(): Observable<any> {
    return this.http.get<Car>(this.endpoint + '/availablecars/',  { 'headers': this.headerDict })
  }


  rentCar(reservation: Reservation): Observable<any> {
    console.log('POST request')
    return this.http.post<Reservation>(this.endpoint + '/reservations/',  reservation, { 'headers': this.headerDict })
  }
}
