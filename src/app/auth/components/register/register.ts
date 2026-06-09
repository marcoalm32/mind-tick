import { Component, signal } from '@angular/core';
import { Form } from '../../../shared/components/form/form';
import { Button } from '../../../shared/components/button/button';
import { Field } from '../../../shared/components/field/field';
import { FormAbstract } from '../../../shared/abstract/form.abstract';
import { ActivatedRoute, Router } from '@angular/router';
import { email, form, minLength, required } from '@angular/forms/signals';
import { passwordValidator } from '../../../shared/validators/password.validator';
import { emailValidator } from '../../../shared/validators/email.validator';
import { RegisterPayload } from '../../models/register.payload';
import { AuthService } from '../../services/auth';
import { User } from '../../models/user.model';

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
export class Register extends FormAbstract<RegisterPayload, User, AuthService> {
  emailStarted = signal(false);
  passwordStarted = signal(false);
  confirmPasswordStarted = signal(false);
  nameStarted = signal(false);
  protected override model = signal<RegisterPayload>({
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
  });
  
  registerForm = form(this.model, (path) => {
    required(path.email, {
      message: 'Email is required'
    }),
    required(path.password, {
      message: 'Password is required'
    }),
    required(path.confirmPassword as any, {
      message: 'Confirm Password is required'
    }),
    required(path.name, {
      message: 'Name is required'
    }),
    email(path.email, {
      message: 'Invalid email format'
    }),
    minLength(path.password, 6, {
      message: 'Password must be at least 6 characters'
    }),
    minLength(path.confirmPassword as any, 6, {
      message: 'Confirm Password must be at least 6 characters'
    })
  });

  emailError = emailValidator(this.registerForm.email, this.emailStarted);
  passwordError = passwordValidator(this.registerForm.password, this.passwordStarted);
  confirmPasswordError = passwordValidator(this.registerForm.confirmPassword as any, this.confirmPasswordStarted);

  constructor(
    protected override router: Router,
    protected override route: ActivatedRoute,
    protected override service: AuthService,
  ) {
    super(router, route, service);
  }

  protected createForm() {
    
  }

  protected isValid(): boolean {
    return this.registerForm().valid();
  }

  protected override create(): void {
    const { confirmPassword, ...payload } = this.model();
    const subscription = this.service.register(payload as User).subscribe({
      next: () => this.router.navigate(['..'], { relativeTo: this.route }),
      error: (err: any) => console.error('Error registering user:', err),
    });
    this.subscriptions.push(subscription);
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
