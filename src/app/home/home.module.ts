import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { BannerComponent } from './components/banner/banner.component';
import { SharedModule } from '../shared/shared.module';
import { DynamicDivsComponent } from './components/dynamic-divs/dynamic-divs.component';
import { StudentsComponent } from './components/students/students.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    DynamicDivsComponent,
    StudentsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class HomeModule { }
