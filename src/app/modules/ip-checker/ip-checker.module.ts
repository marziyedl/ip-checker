import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpCheckerComponent } from './ip-checker.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormsModule } from '@angular/forms';
import { IpDetailCardComponent, MapContainerComponent, SearchBoxComponent } from './components';

@NgModule({
  declarations: [IpCheckerComponent, SearchBoxComponent, IpDetailCardComponent, MapContainerComponent],
  exports: [IpCheckerComponent, SearchBoxComponent, IpDetailCardComponent],
  imports: [CommonModule, LeafletModule, FormsModule],
})
export class IpCheckerModule { }
