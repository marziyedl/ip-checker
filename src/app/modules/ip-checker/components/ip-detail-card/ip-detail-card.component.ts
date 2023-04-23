import { Component } from '@angular/core';
import { LocationResponseModel } from 'app/models/locations';
import { LocationService } from 'app/services';

@Component({
  selector: 'app-ip-detail-card',
  templateUrl: './ip-detail-card.component.html',
  styleUrls: ['./ip-detail-card.component.scss']
})
export class IpDetailCardComponent {
  locationDetail!: LocationResponseModel;
  constructor(private locationService: LocationService) {

    this.locationService.searchResult.subscribe(returnedData => {
      this.locationDetail = returnedData    
    })
  }
}
