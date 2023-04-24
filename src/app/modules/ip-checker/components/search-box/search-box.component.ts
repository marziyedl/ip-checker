import { Component } from '@angular/core';
import { LocationService } from 'app/services';
import { tap } from 'rxjs';


@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent {
  searchValue = "";
  loading = false
  private readonly IpRegex = new RegExp(/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/)

  constructor(private locationService: LocationService) {

  }

  showPosition(position: any) {
    console.log(position)
  }
  onSearchValueChange() {
    if (this.searchValue.length < 6 || !this.IpRegex.test(this.searchValue)) return;
    this.loading = true
    this.locationService.searchIPAddressLocation(this.searchValue).subscribe(() => this.loading = false);

  }

}
