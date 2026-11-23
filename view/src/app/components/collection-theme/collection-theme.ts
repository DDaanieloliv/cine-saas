import { Component, inject } from '@angular/core';
import { PosterGrid } from '../poster-grid/poster-grid';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [ PosterGrid ],
  selector: 'app-collection-theme',
  styleUrl: './collection-theme.scss',
  templateUrl: './collection-theme.html',
})
export class CollectionTheme {

  private route = inject(ActivatedRoute)

  protected themeCollection: string = '';

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      this.themeCollection = params.get('theme') ?? '';
    })
  }
}
