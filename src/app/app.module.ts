import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSliderModule} from '@angular/material/slider';
import { MatListModule} from '@angular/material/list';
import { MatDialogModule} from '@angular/material/dialog';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CarDetailsModal } from './car-details-modal/car-details-modal.component';
import { RentDetailsModalComponent } from './rent-details-modal/rent-details-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    CarDetailsModal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    FlexLayoutModule,
    MatSliderModule,
    MatInputModule,
    MatListModule,
    MatDialogModule
  ],
  entryComponents: [CarDetailsModal],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
