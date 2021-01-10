import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NutritionCalculatorRoutingModule } from './nutrition-calculator-routing.module';
import { NutritionCalculatorComponent } from './nutrition-calculator.component';


@NgModule({
  declarations: [NutritionCalculatorComponent],
  imports: [
    CommonModule,
    NutritionCalculatorRoutingModule
  ],
  exports:[
    NutritionCalculatorComponent
  ]
})
export class NutritionCalculatorModule { }
