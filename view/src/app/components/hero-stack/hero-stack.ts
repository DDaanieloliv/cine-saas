import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hero-stack',
  styleUrl: './hero-stack.scss',
  templateUrl: './hero-stack.html',
})
export class HeroStack {

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
}
