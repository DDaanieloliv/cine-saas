import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  imports: [ RouterLink, RouterLinkActive ],
  selector: 'app-navigation-option',
  styleUrl: './navigation-option.scss',
  templateUrl: './navigation-option.html',
})
export class NavigationOption {
  options = [
    {id: 1, name: 'Home'},
    {id: 2, name: 'Browse'},
    {id: 3, name: 'Collection'},
    {id: 4, name: 'Blog'},
  ]
}
