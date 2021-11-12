import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerWithServiceRoutingModule } from './timer-with-service-routing.module';
import { TimerMainComponent } from './components/timer-main/timer-main.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { CounterComponent } from './components/counter/counter.component';
import { LoggerComponent } from './components/logger/logger.component';
import { TimerComponent } from './components/timer/timer.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    TimerMainComponent,
    ButtonsComponent,
    CounterComponent,
    LoggerComponent,
    TimerComponent
  ],
  imports: [
    CommonModule,
    TimerWithServiceRoutingModule,
    FormsModule,
    SharedModule
  ]
})

export class TimerWithServiceModule { }
