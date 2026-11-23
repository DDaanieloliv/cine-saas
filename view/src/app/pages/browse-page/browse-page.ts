import { Component, inject } from '@angular/core';
import { BrowseTabs } from '../../components/browse-tabs/browse-tabs';
import { BrowseFilters } from '../../components/browse-filters/browse-filters';
import { PosterGrid } from '../../components/poster-grid/poster-grid';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [ BrowseTabs, BrowseFilters, PosterGrid ],
  selector: 'app-browse-page',
  styleUrl: './browse-page.scss',
  templateUrl: './browse-page.html',
})
export class BrowsePage {

  private route = inject(ActivatedRoute);

  protected preset: string | null = null;

  protected searchStr: string | null = null;

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.preset = params.get('preset');
      this.searchStr = params.get('search');
    })
  }

  public tabSelected: string = '';
  public matchBySearch: string = '';
  public matchByCountry: string = '';
  public matchByGenre: string = '';
  public matchByLanguage: string = '';
  public matchByDecade: string = '';
  public isChoosedByEditor: boolean = false;
  public yearDescendin: string = '';

  public updateTabOptionSelected(value: string) {
    this.tabSelected = value;
  }
  public updateBySearch(value: string) {
    this.matchBySearch = value;
  }
  public updateByCountry(value: string) {
    this.matchByCountry = value;
  }
  public updateByGenre(value: string) {
    this.matchByGenre = value;
  }
  public updateByLanguage(value: string) {
    this.matchByLanguage = value;
  }
  public updateByDecade(value: string) {
    this.matchByDecade = value;
  }
  public updateChoosedByEditor(value: boolean) {
    this.isChoosedByEditor = value;
  }
  public updateYearDescendin(value: string) {
    this.yearDescendin = value;
  }
}
