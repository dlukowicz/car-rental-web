import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Car} from "../car";
import {DialogData} from "../dialog.data";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CarService} from "../car.service";
import {CarDetailsModal} from "../car-details-modal/car-details-modal.component";



@Component({
  selector: 'app-rent-details-modal',
  templateUrl: './rent-details-modal.component.html',
  styleUrls: ['./rent-details-modal.component.scss']
})
export class RentDetailsModalComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,public dialog: MatDialog, private carService: CarService) {}

  name = new FormControl('', );
  surname = new FormControl('', );
  email = new FormControl('', [Validators.required, Validators.email]);

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  rentCar(car: Car): void {
    console.log(this.email.value)
    console.log(this.name.value)
    this.carService.rentCar(car)
  }


}
