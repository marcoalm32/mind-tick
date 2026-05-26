import { Component } from '@angular/core';
import { Header } from '../header/header';
import { Navbar } from '../navbar/navbar';
import { Body } from '../body/body';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [
    Header,
    Navbar,
    Body,
    RouterOutlet,
  ],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.scss',
})
export class MainLayout {}
