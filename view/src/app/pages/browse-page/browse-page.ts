import { Component } from '@angular/core';
import { BrowseTabs } from '../../components/browse-tabs/browse-tabs';
import { BrowseFilters } from '../../components/browse-filters/browse-filters';
import { PosterGrid } from '../../components/poster-grid/poster-grid';

@Component({
  imports: [ BrowseTabs, BrowseFilters, PosterGrid ],
  selector: 'app-browse-page',
  styleUrl: './browse-page.scss',
  templateUrl: './browse-page.html',
})
export class BrowsePage {}
