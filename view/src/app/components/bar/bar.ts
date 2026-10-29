import { Component } from '@angular/core';
import { NavigationOption } from '../navigation-option/navigation-option';

@Component({
  imports: [NavigationOption],
  selector: 'app-bar',
  styleUrl: './bar.scss',
  templateUrl: './bar.html',
})
export class Bar {}
