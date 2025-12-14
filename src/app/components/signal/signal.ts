import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  imports: [],
  templateUrl: './signal.html',
  styleUrl: './signal.css',
})
export class Signal {
  courseName = signal("Introduction to Angular");

  count = signal(0);

  notifiactionCount = signal(0);

    constructor() {
      setTimeout(() => {
        console.log('Before  : ' + this.courseName());
        this.courseName.set("Advanced Angular Concepts");
        console.log('After : ' + this.courseName());
      }, 5000);
    }

    increment() {
      this.count.update(value => value + 1);
    }

    decrement() {
      this.count.update(value => value - 1);
    }

    reset() {
      this.count.set(0);
    }

}
