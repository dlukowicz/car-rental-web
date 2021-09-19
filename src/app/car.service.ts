import { Injectable } from '@angular/core';
import { Car } from './car';

import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {catchError} from "rxjs/operators";
import {CreateReservation} from "./createReservation";
import {Reservation} from "./reservation";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CarService {

  endpoint = environment.baseUrl;

  constructor(private http: HttpClient) {
  }

   headerDict = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
  }


  getCars(): Observable<any> {
    return this.http.get<Car>(this.endpoint + 'availablecars',  { 'headers': this.headerDict })
  }


  rentCar(reservation: CreateReservation): Observable<any> {
    return this.http.post<Reservation>(this.endpoint + 'reservations',  reservation, { 'headers': this.headerDict })
  }

  completeRental(reservation: Reservation){
    const httpData = {
      headers: this.headerDict,
      body: reservation,
    };

    return this.http.delete(this.endpoint + 'reservations', httpData)
  }

  getMyRentals(userId: string): Observable<any> {
    return this.http.get<CreateReservation>(this.endpoint + 'reservations/user/' +  userId, { 'headers': this.headerDict })
  }

}
