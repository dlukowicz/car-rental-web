import {Car} from "./car";

export interface Reservation {
  reservationId: number;
  car: Car;
  startDate: string;
  endDate: string
}
