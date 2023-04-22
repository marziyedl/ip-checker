import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpCheckerComponent } from './ip-checker.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';

@NgModule({
  declarations: [IpCheckerComponent, SearchBoxComponent],
  exports: [IpCheckerComponent, SearchBoxComponent],
  imports: [CommonModule],
})
export class IpCheckerModule {}
