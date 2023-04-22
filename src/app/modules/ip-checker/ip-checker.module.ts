import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpCheckerComponent } from './ip-checker.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { IpDetailCardComponent } from './components/ip-detail-card/ip-detail-card.component';

@NgModule({
  declarations: [IpCheckerComponent, SearchBoxComponent, IpDetailCardComponent],
  exports: [IpCheckerComponent, SearchBoxComponent,IpDetailCardComponent],
  imports: [CommonModule],
})
export class IpCheckerModule {}
