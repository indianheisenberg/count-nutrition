import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'count-nutrition',
   loadChildren: () => import('./nutrition-calculator/nutrition-calculator.module')
   .then(m => m.NutritionCalculatorModule) },
   {path:'',
   component:HomeComponent
  },
  { path: 'BMI-Calculator', loadChildren: () => import('./bmi-calculator/bmi-calculator.module').then(m => m.BMICalculatorModule) }
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
