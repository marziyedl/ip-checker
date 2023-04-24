import { Component, OnInit } from '@angular/core';
import { LocationResponseModel } from 'app/models/locations';
import { LocationService } from 'app/services';

@Component({
  selector: 'app-ip-detail-card',
  templateUrl: './ip-detail-card.component.html',
  styleUrls: ['./ip-detail-card.component.scss']
})
export class IpDetailCardComponent implements OnInit {
  locationDetail!: LocationResponseModel;
  constructor(private locService: LocationService) {

  }
  ngOnInit(): void {
    this.getIpDetails()

  }
  getIpDetails() {
    this.locService.searchResult.subscribe(returnedData => {
      this.locationDetail = returnedData
    })
  }
}
