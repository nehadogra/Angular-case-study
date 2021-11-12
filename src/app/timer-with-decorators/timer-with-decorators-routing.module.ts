import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimerMainComponent } from './components/timer-main/timer-main.component';

const routes: Routes = [{
  path:'', component: TimerMainComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class TimerWithDecoratorsRoutingModule { }
