import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { minLength } from '@angular/forms/signals';

@Component({
  selector: 'app-reactive-user',
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-user.html',
  styleUrl: './reactive-user.css',
})
export class ReactiveUser {

  userForm : FormGroup = new FormGroup({
    id: new FormControl(0),
    name: new FormControl('', Validators.required),
    username: new FormControl('', [Validators.required, Validators.minLength(8)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    city: new FormControl('', Validators.required),
    state: new FormControl('', Validators.required)
  });
}
