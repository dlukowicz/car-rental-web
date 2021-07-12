import { Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Car} from "../car";
import {RentDetailsModalComponent} from '../rent-details-modal/rent-details-modal.component'

export interface DialogData {
  animal: string;
  name: string;
  car: Car;
}

@Component({
  selector: 'app-car-details-modal',
  templateUrl: './car-details-modal.component.html',
  styleUrls: ['./car-details-modal.component.scss']
})
export class CarDetailsModal {

  constructor(
    public dialogRef: MatDialogRef<RentDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,public dialog: MatDialog) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  animal= 'sa';
  name= 'asd';


  openRentDetailsDialog(car: Car): void {

    console.log('hej rent details')

    const dialogRef = this.dialog.open(RentDetailsModalComponent, {
      width: '700px',
      data: {car: car}
    });

    this.dialogRef.close()

    //dialogRef.afterClosed().subscribe(result => {
    //  console.log('The dialog was closed');
    //  //this.animal = resul;
    //});
  }


}
