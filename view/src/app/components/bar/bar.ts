import { Component, ElementRef, HostBinding, HostListener } from '@angular/core';
import { NavigationOption } from '../navigation-option/navigation-option';

@Component({
  imports: [NavigationOption],
  selector: 'app-bar',
  styleUrl: './bar.scss',
  templateUrl: './bar.html',
})
export class Bar {

  constructor(
    private elementRef: ElementRef
  ) {}

  protected showInput = false;

  protected launchInputElement(): void {
    this.showInput = !this.showInput;
  }

  @HostBinding('class.is_scrolled')
  protected is_scrolled = false;

  @HostListener('window:scroll')
  protected onWindowScroll(): void {
    this.is_scrolled = window.scrollY > 0;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const searchContainer = this.elementRef.nativeElement
      .querySelector('.search_container');

    if (!searchContainer?.contains(event.target as Node)) {
      this.showInput = false;
    }
  }

}
