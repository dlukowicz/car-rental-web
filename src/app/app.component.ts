import { Component, Inject } from '@angular/core';
import { CarService } from './car.service';
import {Car} from "./car";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';



export interface DialogData {
  animal: string;
  name: string;
  car: Car;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cars: Car[] = [];
  gridColumns = 3;
  animal= 'sa';
  name= 'asd';


  constructor(private carService: CarService,public dialog: MatDialog) {}

  ngOnInit() {
    this.getCars();
  }


  getCars(): void {
    this.cars = this.carService.getCars();
  }

  openDialog(car: Car): void {

    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '700px',
      data: {name: car.name, animal: 'saf', car: car}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = resul;
    });
  }



}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}

