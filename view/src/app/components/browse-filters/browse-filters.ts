import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-browse-filters',
  styleUrl: './browse-filters.scss',
  templateUrl: './browse-filters.html',
})
export class BrowseFilters {

  protected browseSearch = '';

  protected shouldClearFilters = false;

  @Input('preset')
  set preset(value: string | null) {
    if (value === 'desired-picks') {
      this.activateDesiredPicks();
    }
  }

  @Input()
  set searchStr(value: string | null) {
    this.browseSearch = value ?? '';
    this.contentSearch(value ?? '');
  }

  @Output()
  public searchContentChange: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  public selectedCountry: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  public selectedGenre: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  public selectedLanguage: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  public selectedDecade: EventEmitter<string> = new EventEmitter<string>();
  @Output()
  public isChoosedByEditor: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output()
  public selectedYearOrder: EventEmitter<string> = new EventEmitter<string>();


  public filterChange(filter_name: string, elementValue: string) {
    switch (filter_name) {
      case 'Country':
        this.countrySelected(elementValue);
        break;
      case 'Genre':
        this.genreSelected(elementValue);
        break;
      case 'Language':
        this.languageSelected(elementValue);
        break;
      case 'Decade':
        this.decadeSelected(elementValue)
        break;
    }
  }

  protected showClearButtom() {
    this.shouldClearFilters = !this.shouldClearFilters;
    this.byEditorChoosed(this.shouldClearFilters);
  }

  protected contentSearch(value: string) {
    this.searchContentChange.emit(value);
  }
  protected countrySelected(country: string) {
    this.selectedCountry.emit(country);
  }
  protected genreSelected(genre: string) {
    this.selectedGenre.emit(genre);
  }
  protected languageSelected(language: string) {
    this.selectedLanguage.emit(language);
  }
  protected decadeSelected(decade: string) {
    this.selectedDecade.emit(decade);
  }
  protected byEditorChoosed(byEditor: boolean) {
    this.isChoosedByEditor.emit(byEditor);
  }
  protected yearOrderSelected(yearOrder: string) {
    this.selectedYearOrder.emit(yearOrder);
  }

  protected activateDesiredPicks() {
    this.shouldClearFilters = true;
    this.byEditorChoosed(true)
  }

  protected filter_select = [
    {
      id: 1,
      filter_name: 'Country',
      options: [
        { id: 1, option: "All Countries", },
        { id: 2, option: "Brazil", },
      ],
    },
    {
      id: 2,
      filter_name: 'Genre',
      options: [
        { id: 1, option: "All Genres", },
        { id: 2, option: "Documentary", },
      ],
    },
    {
      id: 3,
      filter_name: 'Language',
      options: [
        { id: 1, option: "All Languages", },
        { id: 2, option: "Portugese(Brazil)", },
      ],
    },
    {
      id: 4,
      filter_name: 'Decade',
      options: [
        { id: 1, option: "All Decades", },
        { id: 2, option: "1999s", },
      ],
    },
  ];
}
