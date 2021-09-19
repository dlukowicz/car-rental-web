import { Component, OnInit } from '@angular/core';
import {CarService} from "../car.service";
import {MatDialog} from "@angular/material/dialog";
import {Car} from "../car";
import {CreateReservation} from "../createReservation";
import {Reservation} from "../reservation";
import {AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";
import {UserService} from "../user.service";



export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];


@Component({
  selector: 'app-my-rentals',
  templateUrl: './my-rentals.component.html',
  styleUrls: ['./my-rentals.component.scss']
})
export class MyRentalsComponent implements OnInit  {

  HTTP_STATUS_UNAUTHORIZED = 401

  reservations: Reservation[] = [];

  ngOnInit() {
    this.getMyRentals()
  }

  constructor(private carService: CarService, private router: Router, private authenticationService: AuthenticationService) {}

  displayedColumns: string[] = ['carName','startDate', 'endDate', 'location','actions'];
  dataSource = this.reservations;


  getMyRentals(): void {
    this.carService.getMyRentals(this.authenticationService.getLoggedUserId()).subscribe((resp: any) => {
      this.reservations = resp;

    },
      error => {
        if (error.status == this.HTTP_STATUS_UNAUTHORIZED) {
          this.router.navigate(['/login']);
        }

      });
  }

  showCompleteButton(){
    return this.authenticationService.isAdmin() ? "" : "display:none"
  }

  completeRental(reservation: Reservation) {
    this.carService.completeRental(reservation).subscribe((resp: any) => {
    })
  }
}
