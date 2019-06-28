import {Component, OnInit} from '@angular/core';
import {BackendService} from "src/app/backend.service";
import {HotelInterface} from "src/interfaces/hotel.interface";

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.scss']
})
export class HotelDetailsComponent implements OnInit {

  public hotel: HotelInterface = {
    address: "",
    email: "",
    city: "",
    country: "",
    id: 0,
    image_url: "",
    name: "",
    phone_number: "",
    state: "",
    zip_code: ""
  };

  constructor(
    private backend: BackendService,
  ) {
  }

  ngOnInit() {
    this.backend.request('api/hotels/1').subscribe((res: HotelInterface) => {
      this.hotel = res;
    })
  }

  public save() {
    this.backend.request('api/hotels/1', 'PUT', this.hotel).subscribe((res: HotelInterface) => {
      this.hotel = res;
    })
  }


}
