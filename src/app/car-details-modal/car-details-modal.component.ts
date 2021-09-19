import {Component, OnInit, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Car} from "../car";
import {RentDetailsModalComponent} from '../rent-details-modal/rent-details-modal.component'
import {DialogData} from "../dialog.data";
import {AuthenticationService} from "../authentication.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-car-details-modal',
  templateUrl: './car-details-modal.component.html',
  styleUrls: ['./car-details-modal.component.scss']
})
export class CarDetailsModal {

  constructor(
    public dialogRef: MatDialogRef<RentDetailsModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData, public dialog: MatDialog, private authenticationService: AuthenticationService,
    private router: Router) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }


  openRentDetailsDialog(car: Car): void {

    const dialogRef = this.dialog.open(RentDetailsModalComponent, {
      width: '700px',
      data: {car: car}
    });
    this.dialogRef.close()
  }

  isLogged() {
    return this.authenticationService.isUserLoggedIn()
  }

  redirectToLoginPage() {
    this.dialogRef.close()
    this.router.navigate(['/login']);
  }


}
