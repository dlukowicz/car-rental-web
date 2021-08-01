import {Car} from "./car";

export interface Reservation {
  car: Car
  startDate: string;
  endDate: string
}
