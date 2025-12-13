import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [CommonModule, FormsModule],
  templateUrl: './databinding.html',
  styleUrl: './databinding.css',
})
export class Databinding {

  courseName: string = 'Angular 21';
  courseDuration: number = 40;
  courseNotes: string = 'This course covers the basics of Angular 21.';
  coursePrice: number = 199.99;
  isAvailable: boolean = true;
  currentDate: Date = new Date();
  cityList: string[] = ['Pune', 'Mumbai', 'Solapur', 'Nashik', 'Nagpur'];
  
  courseObject: { name: string; duration: number; price: number } = {
    name: this.courseName,
    duration: this.courseDuration,
    price: this.coursePrice,
  };

  className: string = 'primary';
  inputType: string = 'text';
  buttonType: string = 'button';
  radioType: string = 'radio';
  chkType: string = 'checkbox';

  courseList = [
    { name: 'Angular 15', duration: 40, price: 199.99 },
    { name: 'Angular 16', duration: 50, price: 1909.99 },
    { name: 'Angular 17', duration: 60, price: 1899.99 },
    { name: 'Angular 18', duration: 70, price: 2511.99 },
    { name: 'Angular 19', duration: 80, price: 3566.99 },
    { name: 'Angular 20', duration: 90, price: 8789.99 },
    { name: 'Angular 21', duration: 100, price: 15455.99 }
  ]

  showMessage(): void {
    alert(this.courseName + ' is awesome!');
  }

  updateCourseName(text: string): void {
    this.courseName =text;
  }
}
