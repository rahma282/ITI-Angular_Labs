import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-form-reister',
  imports: [ReactiveFormsModule,RouterLink, RouterLinkActive],
  templateUrl: './form-reister.component.html',
  styleUrls: ['./form-reister.component.css']
})
export class FormReisterComponent {
  registerForm: FormGroup;
  constructor(){
    this.registerForm =new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
      userName: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z0-9]+$')]),
      password: new FormControl('', [Validators.required,Validators.minLength(8),Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]),
      confirmPassword: new FormControl('', [Validators.required])
    },{ validators: this.passwordMatchValidator })
  }
  passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password && confirmPassword && password.value !== confirmPassword.value) {
      return { passwordMismatch: true };
    }
    return null;
  };

  handleRegisterForm(){
    console.log(this.registerForm)
    this.registerForm.reset()
  }
}
