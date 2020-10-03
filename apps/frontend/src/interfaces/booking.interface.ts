import {RoomInterface} from 'src/interfaces/room.interface';

export interface BookingInterface {
  id?: number;
  start: string;
  end: string;
  customer_fullname: string;
  customer_email: string;
  room: RoomInterface;
  total_nights: number;
  price: number;
  is_past: boolean;
}
