import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { LocationResponseModel } from 'app/models/locations';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing'

describe('LocationService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  const expectedlocations: LocationResponseModel = {
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
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpTestingController.verify();
  })
  it('Should return location info from Http Get call.', () => {
    httpClient.get<any>("https://wookie.codesubmit.io/ipcheck", { params: { ip: "8.8.8.8" } })
      .subscribe(data => {
        expect(data).toEqual(expectedlocations)
      }
      );

    const mockHttp = httpTestingController.expectOne("https://wookie.codesubmit.io/ipcheck?ip=8.8.8.8");
    const httpRequest = mockHttp.request;
    expect(httpRequest.method).toEqual("GET");
    mockHttp.flush(expectedlocations);

  });

});
