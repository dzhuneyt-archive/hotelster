import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HotelDetailsComponent} from 'src/app/hotel-details/hotel-details.component';

const routes: Routes = [
  {
    path: 'hotel-details',
    component: HotelDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
