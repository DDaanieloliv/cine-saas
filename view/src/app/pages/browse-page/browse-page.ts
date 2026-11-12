import { Component } from '@angular/core';
import { BrowseTabs } from '../../components/browse-tabs/browse-tabs';
import { BrowseFilters } from '../../components/browse-filters/browse-filters';

@Component({
  imports: [ BrowseTabs, BrowseFilters ],
  selector: 'app-browse-page',
  styleUrl: './browse-page.scss',
  templateUrl: './browse-page.html',
})
export class BrowsePage {}
