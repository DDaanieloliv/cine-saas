import { Component } from '@angular/core';
import { HttpService } from '../../core/services/http.service';
import { COLLECTION_PALETTES, CollectionPalette } from '../../core/constants/collection-palletes';
import { CollectionCard } from '../../core/model/collectionCard.model';
import { COLLECTION_DEFINITIONS } from '../../core/constants/collection-definition';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-collection-grid',
  imports: [RouterLink],
  templateUrl: './collection-grid.html',
  styleUrl: './collection-grid.scss',
})
export class CollectionGrid {

  protected readonly palettes: readonly CollectionPalette[] =
    Object.values(COLLECTION_PALETTES);

  protected collections: CollectionCard[] = [];

  constructor(private http: HttpService) {
    const contents = this.http.mockData();

    this.collections = COLLECTION_DEFINITIONS.map((collection) => {
      const posters = contents.filter((poster) =>
        poster.byCollection.includes(collection.name)
      );

      return {
        ...collection,
        count: posters.length,
        filmCount: posters.filter(
          (poster) => poster.type === 'Film'
        ).length,
        seriesCount: posters.filter(
          (poster) => poster.type === 'Series'
        ).length,
        palette: this.getPalette(collection.id),
      };
    });
  }

  private getPalette(id: number): CollectionPalette {
    const index = (id - 1) % this.palettes.length;

    return this.palettes[index] ?? COLLECTION_PALETTES.sage;
  }

}
