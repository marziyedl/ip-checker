import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, shareReplay, BehaviorSubject, Observable, Subject } from 'rxjs';
import { LocationResponseModel } from 'app/models/locations';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private readonly httpUrl = "https://wookie.codesubmit.io/ipcheck"
  apiStore = new Map();
  private dataSource: Subject<LocationResponseModel> = new Subject()
  searchResult: Observable<LocationResponseModel> = this.dataSource.asObservable();

  constructor(private http: HttpClient) { }

  public searchIPAddressLocation(param?: string) {
    if (!this.apiStore.has(param)) {
      this.apiStore.set(param, this.getIPAddresssRequest(param));
    }
    return this.apiStore.get(param);
  }


  private getIPAddresssRequest(param: string = "") {
    return this.http.get<LocationResponseModel>(this.httpUrl, { params: { ip: param } }).pipe(
      map(response => this.dataSource.next(response)), shareReplay()
    );
  }




}