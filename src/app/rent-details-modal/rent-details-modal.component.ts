import { Component, OnInit,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Car} from "../car";
import {DialogData} from "../dialog.data";



@Component({
  selector: 'app-rent-details-modal',
  templateUrl: './rent-details-modal.component.html',
  styleUrls: ['./rent-details-modal.component.scss']
})
export class RentDetailsModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,public dialog: MatDialog) {}

  ngOnInit(): void {
  }

}
