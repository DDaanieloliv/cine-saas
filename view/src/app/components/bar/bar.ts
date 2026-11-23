import {
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
  ViewChild,
} from '@angular/core';
import { NavigationOption } from '../navigation-option/navigation-option';

@Component({
  imports: [NavigationOption],
  selector: 'app-bar',
  styleUrl: './bar.scss',
  templateUrl: './bar.html',
})
export class Bar {

  constructor(
    private elementRef: ElementRef,
    private cdr: ChangeDetectorRef
  ) {}

  protected showInput = false;

  protected focusInputElement() {
    this.inputElement.nativeElement.focus();
  }

  protected launchInputElement(): void {
    this.showInput = !this.showInput;
    if (this.showInput) {
      this.cdr.detectChanges();
      this.focusInputElement()
      this.onConfirmSearch()
    }
  }

  protected searchInBrowsePage(value: string) {
    this.toSearch.emit(value);
  }

  protected onConfirmSearch() {
    const element = document.querySelector<HTMLInputElement>('#inputElement');
    element?.addEventListener('keyup', (event) => {
      if (event.key === "Enter") {
        this.searchInBrowsePage(element.value)
      }
    });
  }

  @Output()
  public toSearch: EventEmitter<string> = new EventEmitter<string>();

  @ViewChild('inputElement')
  protected inputElement!: ElementRef<HTMLInputElement>;

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
