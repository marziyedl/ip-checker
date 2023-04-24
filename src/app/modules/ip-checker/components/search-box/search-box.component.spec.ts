import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { SearchBoxComponent } from './search-box.component';
import { HttpClientModule } from '@angular/common/http';
import { LocationService } from 'app/services';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { LocationResponseModel } from 'app/models/locations';
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
describe('SearchBoxComponent', () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;
  let searchValue = '8.8.8.8';

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchBoxComponent],
      providers: [
        LocationService
      ],
      imports: [HttpClientModule, FormsModule],

    }).compileComponents();

    fixture = TestBed.createComponent(SearchBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should  test two-way binding by setting value directly on the native el', fakeAsync(() => {
    component.searchValue = searchValue;
    fixture.detectChanges();
    tick();
    let input = fixture.debugElement.query(By.css('input')).nativeElement
    expect(input.value).toBe(searchValue);

  }));
  it('should call onSearchValueChange', fakeAsync(() => {

    spyOn(component, 'onSearchValueChange');
    let input = fixture.debugElement.query(By.css("input")).nativeElement;
    input.value = searchValue;
    const result = input.dispatchEvent(new Event('input'));
    expect(component.onSearchValueChange).toHaveBeenCalledTimes(1);
    expect(result).toBeTruthy();

  }));

  it('should return when input value is invalid', fakeAsync(() => {

    const test = spyOn(component, 'onSearchValueChange');
    let input = fixture.debugElement.query(By.css("input")).nativeElement;
    input.value = "8";
    expect(test()).toBeFalsy();

  }));


  it("should call searchIPAddressLocation and return res", fakeAsync(() => {
    const spyObj = {
      ...jasmine.createSpyObj('locService', ['searchIPAddressLocation']),
      searchResult: response
    };
    spyObj.searchIPAddressLocation();
    expect(spyObj.searchIPAddressLocation).toHaveBeenCalledTimes(1);
    expect(spyObj.searchResult).toBe(response);
  }));
});
