import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Variables } from './components/variables/variables';
import { Databinding } from './components/databinding/databinding';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Variables, Databinding],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular21-app');
}
