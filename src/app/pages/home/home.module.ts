import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzInputModule } from 'ng-zorro-antd/input';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NzCardModule,
    NzInputModule,
    FormsModule,
    NzButtonModule
  ]
})
export class HomeModule { }
