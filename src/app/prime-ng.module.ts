import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    MultiSelectModule,
    DropdownModule,
    ToastModule,
  ],
  exports: [
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    MultiSelectModule,
    DropdownModule,
    ToastModule,
  ],
})
export class PrimeNgModule {}
