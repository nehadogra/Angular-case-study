import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerWithDecoratorsRoutingModule } from './timer-with-decorators-routing.module';
import { TimerMainComponent } from './components/timer-main/timer-main.component';
import { CounterComponent } from './components/counter/counter.component';
import { LoggerComponent } from './components/logger/logger.component';
import { TimerComponent } from './components/timer/timer.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
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
    TimerWithDecoratorsRoutingModule,
    FormsModule,
    SharedModule
  ]
})

export class TimerWithDecoratorsModule { }
