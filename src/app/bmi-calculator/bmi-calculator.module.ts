import { MaterialModule } from './../material-module/material-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BMICalculatorRoutingModule } from './bmi-calculator-routing.module';
import { BMICalculatorComponent } from './bmi-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [BMICalculatorComponent],
  imports: [
    CommonModule,
    BMICalculatorRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BMICalculatorModule { }
