import { Component, HostListener, signal } from '@angular/core';
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
  protected activeIndex = signal(0);

  protected stack = [
    { id: 1, title: 'Movie 1' },
    { id: 2, title: 'Movie 2' },
    { id: 3, title: 'Movie 3' },
    { id: 4, title: 'Movie 4' },
    { id: 5, title: 'Movie 5' },
  ];

  private autoplayInterval?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.autoplayInterval = setInterval(() => {
      this.nextCard();
    }, 4000);
  }

  ngOnDestroy(): void {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  private nextCard(): void {
    this.activeIndex.update( index => (index + 1) % this.stack.length );
  }

  protected handleCardPosition(index: number): number {
    return (index - this.activeIndex() + this.stack.length) % this.stack.length;
  }

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
