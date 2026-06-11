import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Navbar } from '../navbar/navbar';
import { Body } from '../body/body';

@Component({
  selector: 'app-main-layout',
  imports: [
    Header,
    Navbar,
    Body,
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {}
