import { Component } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import { Login } from '../login/login';
import { Register } from '../register/register';

@Component({
  selector: 'app-auth',
  imports: [
    MatTabsModule,
    Login,
    Register,
  ],
  templateUrl: './auth.html',
  styleUrl: './auth.scss',
})
export class Auth {

  tabIndex = 0;
  onTabChange(index: number) {
    this.tabIndex = index;
  }

}
