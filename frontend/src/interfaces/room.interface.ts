import {HotelInterface} from 'src/interfaces/hotel.interface';
import {RoomTypeInterface} from 'src/interfaces/room-type.interface';

export interface RoomInterface {
  id?: number;
  name: string;
  room_image_url: string;
  hotel?: HotelInterface;
  room_type?: RoomTypeInterface;
}
