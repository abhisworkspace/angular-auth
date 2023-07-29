import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PrimeNgModule } from '../prime-ng.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeatureRoutingModule } from './feature-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, FeatureRoutingModule, PrimeNgModule],
})
export class FeatureModule {}
