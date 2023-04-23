import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpCheckerComponent } from './ip-checker.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { IpDetailCardComponent } from './components/ip-detail-card/ip-detail-card.component';
import { MapContainerComponent } from './components/map-container/map-container.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';

@NgModule({
  declarations: [IpCheckerComponent, SearchBoxComponent, IpDetailCardComponent, MapContainerComponent],
  exports: [IpCheckerComponent, SearchBoxComponent, IpDetailCardComponent],
  imports: [CommonModule, LeafletModule],
})
export class IpCheckerModule { }
