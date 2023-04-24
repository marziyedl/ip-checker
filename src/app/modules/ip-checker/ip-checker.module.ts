import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpCheckerComponent } from './ip-checker.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormsModule } from '@angular/forms';
import { IpDetailCardComponent, MapContainerComponent, SearchBoxComponent } from './components';
import { LoadingModule } from 'app/components/loading/loading.module';

@NgModule({
  declarations: [IpCheckerComponent, SearchBoxComponent, IpDetailCardComponent, MapContainerComponent],
  exports: [IpCheckerComponent, SearchBoxComponent, IpDetailCardComponent],
  imports: [CommonModule, LeafletModule, FormsModule,LoadingModule],
})
export class IpCheckerModule { }
