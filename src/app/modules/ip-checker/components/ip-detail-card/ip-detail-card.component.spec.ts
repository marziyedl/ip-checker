import { ComponentFixture, TestBed, fakeAsync, } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IpDetailCardComponent } from './ip-detail-card.component';
import { LocationService } from 'app/services';
import { LocationResponseModel } from 'app/models/locations';
import {  Subject, } from 'rxjs';
import {  HttpClientModule } from '@angular/common/http';

const response: LocationResponseModel = {
  as: {
    asn: 15169,
    domain: "https://about.google/intl/en/",
    name: "GOOGLE",
    route: "8.8.8.0/24",
    type: "Content"
  },
  domains: ["a"]
  , ip: "8.8.8.86",
  isp: "Google LLC",
  location: {
    city: "Mountain View",
    country: "US",
    geonameId: 5375480,
    lat: 37.38605,
    lng: -122.08385,
    postalCode: "94035",
    region: "California",
    timezone: "-07:00"
  }
}
describe('IpDetailCardComponent', () => {
  let component: IpDetailCardComponent;
  let fixture: ComponentFixture<IpDetailCardComponent>;
  const searchResult = new Subject<LocationResponseModel>();

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IpDetailCardComponent],
      providers: [
        { provide: LocationService, useValue: { searchResult } }
      ],
      imports: [HttpClientTestingModule, HttpClientModule],

    }).compileComponents();

    fixture = TestBed.createComponent(IpDetailCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it("should call getIpDetails and return info", fakeAsync(() => {
    searchResult.next(response)
    const test = spyOn(component, 'getIpDetails')
    component.getIpDetails();
    expect(test).toHaveBeenCalledTimes(1);
    expect(component.locationDetail).toBe(response);


  }));
  it('should have <strong> with 4 length', () => {
    searchResult.next(response)
    fixture.detectChanges();
    const bannerElement: HTMLElement = fixture.nativeElement;
    const strong = bannerElement.querySelectorAll('strong')!;
    expect(strong.length).toEqual(4);
  });



});
