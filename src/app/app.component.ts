import { Component, Inject } from '@angular/core';
import { CarService } from './car.service';
import {Car} from "./car";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CarDetailsModal} from './car-details-modal/car-details-modal.component'
import {AuthenticationService} from "./authentication.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cars: Car[] = [];
  gridColumns = 3;


  constructor(private carService: CarService,public dialog: MatDialog,
              private authenticationService: AuthenticationService, private router: Router) {}

  ngOnInit() {
    this.getCars();
  }


  getCars(): void {
    this.carService.getCars().subscribe((resp: any) => {
      this.cars = resp;
    });
  }

  openDialog(car: Car): void {

    const dialogRef = this.dialog.open(CarDetailsModal, {
      width: '700px',
      data: {car: car}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  logout() {
    this.router.navigate(['/cars'])
    this.authenticationService.logout()
  }

  showButtonForLoggedUser(){
    return this.authenticationService.isUserLoggedIn() ? "" : "display:none"
  }

  isAdmin(){
    return this.authenticationService.isAdmin()
  }



}



