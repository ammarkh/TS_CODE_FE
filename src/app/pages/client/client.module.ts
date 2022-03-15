import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzAlertModule } from 'ng-zorro-antd/alert';
import { AddClientComponent } from './add-client/add-client.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';



@NgModule({
  declarations: [
    ClientComponent,
    AddClientComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzDividerModule,
    NzAlertModule,
    FormsModule,
    ReactiveFormsModule,
    NzFormModule,
    NzButtonModule
  ],
  exports: [
    ClientComponent, 
    AddClientComponent
  ]
})
export class ClientModule { }
