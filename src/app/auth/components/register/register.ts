import { Component, signal } from '@angular/core';
import { Form } from '../../../shared/components/form/form';
import { Button } from '../../../shared/components/button/button';
import { Field } from '../../../shared/components/field/field';
import { FormAbstract } from '../../../shared/abstract/form.abstract';
import { User } from '../../models/user.model';
import { Auth } from '../auth/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { email, form, minLength, required } from '@angular/forms/signals';
import { passwordValidator } from '../../../shared/validators/password.validator';
import { emailValidator } from '../../../shared/validators/email.validator';

@Component({
  selector: 'app-register',
  imports: [
    Form,
    Field,
    Button,
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register extends FormAbstract<User> {
  emailStarted = signal(false);
  passwordStarted = signal(false);
  confirmPasswordStarted = signal(false);
  model = signal<{ email: string, password: string, confirmPassword: string }>({
    email: '',
    password: '',
    confirmPassword: '',
  });
  
  registerForm = form(this.model, (path) => {
    required(path.email, {
      message: 'Email is required'
    }),
    required(path.password, {
      message: 'Password is required'
    }),
    required(path.confirmPassword, {
      message: 'Confirm Password is required'
    }),
    email(path.email, {
      message: 'Invalid email format'
    }),
    minLength(path.password, 6, {
      message: 'Password must be at least 6 characters'
    }),
    minLength(path.confirmPassword, 6, {
      message: 'Confirm Password must be at least 6 characters'
    })
  });

  emailError = emailValidator(this.registerForm.email, this.emailStarted);
  passwordError = passwordValidator(this.registerForm.password, this.passwordStarted);
  confirmPasswordError = passwordValidator(this.registerForm.confirmPassword, this.confirmPasswordStarted);

  constructor(
    protected override router: Router,
    protected override route: ActivatedRoute,
    protected override service: Auth,
  ) {
    super(router, route, service);
  }

  protected createForm() {
    
  }

  onEmailChange(value: string): void {
    this.emailStarted.set(true);
    this.model.update((current) => ({
      ...current,
      email: value,
    }));
  }

  onPasswordChange(value: string): void {
    this.passwordStarted.set(true);
    this.model.update((current) => ({
      ...current,
      password: value,
    }));
  }

  onConfirmPasswordChange(value: string): void {
    this.confirmPasswordStarted.set(true);
    this.model.update((current) => ({
      ...current,
      confirmPassword: value,
    }));
  }
}
