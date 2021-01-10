import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.scss'],
})
export class BMICalculatorComponent implements OnInit {
  calculatedBMI: any = '';
  category: any;

  categoryChart = [
    {
      type: 'Severe Thinness',
      min: 0,
      max: 16,
      color: 'red',
    },
    {
      type: 'Moderate Thinness',
      min: 16,
      max: 17,
      color: 'red',
    },
    {
      type: 'Mild Thinness',
      min: 17,
      max: 18.5,
      color: '#c4c225',
    },
    {
      type: 'Normal',
      min: 18.5,
      max: 25,
      color: 'green',
    },
    {
      type: 'Overweight',
      min: 25,
      max: 30,
      color: '#c4c225',
    },
    {
      type: 'Obese Class I',
      min: 30,
      max: 35,
      color: 'red',
    },
    {
      type: 'Obese Class II',
      min: 35,
      max: 40,
      color: 'red',
    },
    {
      type: 'Obese Class III',
      min: 40,
      max: 1000000,
      color: 'red',
    },
  ];
  BMIForm = this.fb.group({
    unit: [''],
    age: [''],
    gender: ['Male'],
    height: [''],
    weight: [''],
  });
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  calculate() {
    this.calculatedBMI =
      this.BMIForm.controls.weight.value /
      ((this.BMIForm.controls.height.value / 100) *
        (this.BMIForm.controls.height.value / 100));
    this.calculatedBMI = Math.round(this.calculatedBMI * 10) / 10;

    this.category = this.categoryChart.find((data) => {
      if (this.calculatedBMI > data.min && this.calculatedBMI <= data.max)
        return true;
      return false;
    });
  }
  validate() {
    if (
      this.BMIForm.controls.weight.errors ||
      this.BMIForm.controls.height.errors ||
      this.BMIForm.controls.gender.errors ||
      this.BMIForm.controls.age.errors
    ) {
      return false;
    }
    return true;
  }

  numberOnly(event: any): boolean {
    const charCode = event.which ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
}
