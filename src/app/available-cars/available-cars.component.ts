import {Component, OnInit} from '@angular/core';
import {Car} from "../car";
import {CarService} from "../car.service";
import {MatDialog} from "@angular/material/dialog";
import {CarDetailsModal} from "../car-details-modal/car-details-modal.component";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-available-cars',
  templateUrl: './available-cars.component.html',
  styleUrls: ['./available-cars.component.scss']
})
export class AvailableCarsComponent implements OnInit {

  cars: Car[] = [];
  gridColumns = 3;


  constructor(private carService: CarService, public dialog: MatDialog) {
  }

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


}
