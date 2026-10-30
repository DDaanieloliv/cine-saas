import { Component } from '@angular/core';
import { RowSection } from '../../components/row-section/row-section';
import { Footer } from '../../components/footer/footer';
import { Hero } from '../../components/hero/hero';

@Component({
  imports: [ RowSection, Footer, Hero ],
  selector: 'app-home-page',
  styleUrl: './home-page.scss',
  templateUrl: './home-page.html',
})
export class HomePage {}
