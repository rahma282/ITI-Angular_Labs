import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-form-login',
  imports: [FormsModule,RouterLink, RouterLinkActive],
  templateUrl: './form-login.component.html',
  styleUrl: './form-login.component.css'
})
export class FormLoginComponent {
  formValues = {
    email: '',
    password: ''
  };
  handleLogin(form:any){
    if (form.valid) {
      console.log('Form submitted successfully', this.formValues);
      form.reset();
    } else {
      console.log('Form is invalid');
    }
  }
}
