import { Component, Input, signal } from '@angular/core';
import { HttpService } from '../../core/services/http.service';

@Component({
  imports: [],
  selector: 'app-poster-grid',
  styleUrl: './poster-grid.scss',
  templateUrl: './poster-grid.html',
})
export class PosterGrid {

  protected contents;

  constructor(private http: HttpService) {
    this.contents = signal(this.http.mockData());
  }

  @Input()
  public matchBySearch: string = '';
  @Input()
  public matchByCountry: string = '';
  @Input()
  public matchByGenre: string = '';
  @Input()
  public matchByLanguage: string = '';
  @Input()
  public matchByDecade: string = '';
  @Input()
  public isChoosedByEditor: boolean = false;
  @Input()
  public yearDescendin: boolean = true;
}
