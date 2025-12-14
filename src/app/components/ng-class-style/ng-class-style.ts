import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class-style',
  imports: [FormsModule, NgClass, NgStyle],
  templateUrl: './ng-class-style.html',
  styleUrl: './ng-class-style.css',
})
export class NgClassStyle {

  bgClass: string = "bg-primary";
  bgClass1: string = "bg-warning";

  isFlag: boolean = false;

  textGreenColor: string = "green";
  textRedColor: string = "red";

  studelist: any[] = [
    {id:101, name:'John', age:23},
    {id:102, name:'Smith', age:18},
    {id:103, name:'David', age:25},
    {id:104, name:'Mark', age:14},
    {id:105, name:'Mary', age:27},
  ];
}
