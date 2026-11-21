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
  public yearDescendin: string = '';

  protected filterContents() {
    const normalize = (value: string): string =>
    value.trim().toLowerCase();

    const search = normalize(this.matchBySearch);
    const country = normalize(this.matchByCountry);
    const genre = normalize(this.matchByGenre);
    const language = normalize(this.matchByLanguage);
    const decade = normalize(this.matchByDecade);

    const hasCountryFilter =
      country !== '' && country !== 'all countries';

    const hasGenreFilter =
      genre !== '' && genre !== 'all genres';

    const hasLanguageFilter =
      language !== '' && language !== 'all languages';

    const hasDecadeFilter =
      decade !== '' && decade !== 'all decades';

    const decadeStart = hasDecadeFilter
      ? Number(decade.replace(/s$/i, ''))
      : null;

      const decadeEnd = decadeStart !== null
        ? decadeStart + 9
        : null;

        return this.contents()
        .filter((content) => {
          const contentYear = Number(content.year);

          const matchesSearch =
            !search ||
            normalize(content.poster_title).includes(search);

          const matchesCountry =
            !hasCountryFilter ||
            normalize(content.countries).includes(country);

          const matchesGenre =
            !hasGenreFilter ||
            normalize(content.genre).includes(genre);

          const matchesLanguage =
            !hasLanguageFilter ||
            normalize(content.language).includes(language);

          const matchesDecade =
            !hasDecadeFilter ||
            (
              decadeStart !== null &&
                decadeEnd !== null &&
                contentYear >= decadeStart &&
                contentYear <= decadeEnd
          );

          const matchesEditor =
            !this.isChoosedByEditor ||
            content.editor_pick;

          return (
            matchesSearch &&
              matchesCountry &&
              matchesGenre &&
              matchesLanguage &&
              matchesDecade &&
              matchesEditor
          );
        })
        .sort((a, b) => {
          const yearA = Number(a.year);
          const yearB = Number(b.year);

          return this.yearDescendin === 'asc'
            ? yearA - yearB
            : yearB - yearA;
        });
  }
}
