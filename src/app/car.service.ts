import { Injectable } from '@angular/core';
import { Car } from './car';
import { Cars } from './mock-cars';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {CreateReservation} from "./createReservation";
import {Reservation} from "./reservation";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  endpoint = 'http://localhost:8080';

  constructor(private http: HttpClient) {
  }

   headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }


  getCars(): Observable<any> {
    return this.http.get<Car>(this.endpoint + '/availablecars',  { 'headers': this.headerDict })
  }


  rentCar(reservation: CreateReservation): Observable<any> {
    return this.http.post<Reservation>(this.endpoint + '/reservations',  reservation, { 'headers': this.headerDict })
  }

  getMyRentals(userId: string): Observable<any> {
    return this.http.get<CreateReservation>(this.endpoint + '/reservations/' +  userId, { 'headers': this.headerDict })
  }

}
