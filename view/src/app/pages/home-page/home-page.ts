import { Component } from '@angular/core';
import { RowSection } from '../../components/row-section/row-section';
import { Hero } from '../../components/hero/hero';

@Component({
  imports: [ RowSection, Hero ],
  selector: 'app-home-page',
  styleUrl: './home-page.scss',
  templateUrl: './home-page.html',
})
export class HomePage {}
