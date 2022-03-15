import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ProviderComponent } from './provider.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';



@NgModule({
  declarations: [
    AddProviderComponent,
    ProviderComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzDividerModule,
    NzAlertModule,
    NzButtonModule,
    NzFormModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AddProviderComponent,
    ProviderComponent
  ]
})
export class ProviderModule { }
