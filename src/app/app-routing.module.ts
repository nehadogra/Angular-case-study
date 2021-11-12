import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannerComponent } from './home/components/banner/banner.component';
import { DynamicDivsComponent } from './home/components/dynamic-divs/dynamic-divs.component';
import { HomeComponent } from './home/components/home/home.component';
import { StudentsComponent } from './home/components/students/students.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'banner', component: BannerComponent },
  { path: 'dynamic', component: DynamicDivsComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'products', loadChildren: () => import('../app/products/products.module').then(m => m.ProductsModule) },
  { path: 'timer-decorator', loadChildren: () => import('../app/timer-with-decorators/timer-with-decorators.module').then(m => m.TimerWithDecoratorsModule) },
  { path: 'timer-service', loadChildren: () => import('../app/timer-with-service/timer-with-service.module').then(m => m.TimerWithServiceModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
