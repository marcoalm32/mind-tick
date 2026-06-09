import { Component, computed, EventEmitter, Output, signal } from '@angular/core';
import { FormAbstract } from '../../../shared/abstract/form.abstract';
import { ActivatedRoute, Router } from '@angular/router';
import { email, form, minLength, required } from '@angular/forms/signals';
import { Form } from '../../../shared/components/form/form';
import { Field } from '../../../shared/components/field/field';
import { Button } from '../../../shared/components/button/button';
import { passwordValidator } from '../../../shared/validators/password.validator';
import { emailValidator } from '../../../shared/validators/email.validator';
import { LoginPayload } from '../../models/login.payload';
import { BaseEntity } from '../../../shared/models/crud.model';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  imports: [
    Form,
    Field,
    Button,
  ],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login extends FormAbstract<LoginPayload> {
  emailStarted = signal(false);
  passwordStarted = signal(false);
  @Output() createAccount = new EventEmitter<number>();

  protected override model = signal<LoginPayload>({
    email: '',
    password: '',
  });

  loginForm = form(this.model, (path) => {
    required(path.email, {
      message: 'Email is required'
    }),
    email(path.email, {
      message: 'Email is not valid'
    }),
    required(path.password, {
      message: 'Password is required'
    }),
    minLength(path.password, 6, {
      message: 'Password must be at least 6 characters'
    })
  });

  emailError = emailValidator(this.loginForm.email, this.emailStarted);
  passwordError = passwordValidator(this.loginForm.password, this.passwordStarted);

  constructor(
    protected override router: Router,
    protected override route: ActivatedRoute,
    protected override service: AuthService,
  ) {
    super(router, route, service);
  }

  protected createForm() {
    console.log('Creating form');
  }

  protected isValid(): boolean {
    return this.loginForm().valid();
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
  
    
}
