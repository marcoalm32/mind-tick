import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {

  routeList = [
    { name: 'Dashboard', path: '/dashboard', icon: 'dashboard.svg' },
    { name: 'My Ideas', path: '/ideas', icon: 'my-ideas.svg' },
    { name: 'Tasks', path: '/tasks', icon: 'tasks.svg' },
    { name: 'Settings', path: '/settings', icon: 'settings.svg' },
  ];
}
