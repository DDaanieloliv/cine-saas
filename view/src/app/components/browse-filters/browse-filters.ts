import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-browse-filters',
  styleUrl: './browse-filters.scss',
  templateUrl: './browse-filters.html',
})
export class BrowseFilters {
  protected filter_select = [
    {
      id: 1,
      filter_name: 'By Country',
      options: [
        { id: 1, option: "All Countries", },
        { id: 2, option: "Brazil", },
      ],
    },
    {
      id: 2,
      filter_name: 'By Genre',
      options: [
        { id: 1, option: "All Genres", },
        { id: 2, option: "Documentary", },
      ],
    },
    {
      id: 3,
      filter_name: 'By Language',
      options: [
        { id: 1, option: "All Languages", },
        { id: 2, option: "Portugese(Brazil)", },
      ],
    },
    {
      id: 4,
      filter_name: 'By Decade',
      options: [
        { id: 1, option: "All Decades", },
        { id: 2, option: "1999s", },
      ],
    },
  ];
}
