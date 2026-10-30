import { Component, HostListener } from '@angular/core';
import { HeroStack } from '../hero-stack/hero-stack';
import { HeroText } from '../hero-text/hero-text';

@Component({
  imports: [ HeroText, HeroStack ],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {

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
