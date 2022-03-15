import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDescriptionsModule } from 'ng-zorro-antd/descriptions';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductComponent } from './product.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { AddProductComponent } from './add-product/add-product.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';



@NgModule({
  declarations: [
    ProductComponent,
    AddProductComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NzDescriptionsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzCheckboxModule,
    NzDatePickerModule
  ],
  exports: [
    ProductComponent,
    
  ]
})

export class ProductModule { }
