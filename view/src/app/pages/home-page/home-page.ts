import { Component, HostListener } from '@angular/core';
import { RowSection } from '../../components/row-section/row-section';
import { Footer } from '../../components/footer/footer';

@Component({
  imports: [ RowSection, Footer ],
  selector: 'app-home-page',
  styleUrl: './home-page.scss',
  templateUrl: './home-page.html',
})
export class HomePage {

  protected showButton = false;

  @HostListener('window:scroll')
  protected onScroll(): void {
    this.showButton = window.scrollY > 650;
  }

  protected scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
