import { Component, Inject } from '@angular/core';
import { CarService } from './car.service';
import {Car} from "./car";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {CarDetailsModal} from './car-details-modal/car-details-modal.component'




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cars: Car[] = [];
  gridColumns = 3;


  constructor(private carService: CarService,public dialog: MatDialog) {}

  ngOnInit() {
    this.getCars();
  }


  getCars(): void {
    this.carService.getCars().subscribe((resp: any) => {
      this.cars = resp;
      console.log(this.cars);
    });
    //this.cars = this.carService.getCars();
  }

  openDialog(car: Car): void {

    const dialogRef = this.dialog.open(CarDetailsModal, {
      width: '700px',
      data: {car: car}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }



}



