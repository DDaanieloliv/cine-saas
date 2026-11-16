import { Component } from '@angular/core';
import { CollectionGrid } from '../../components/collection-grid/collection-grid';

@Component({
  imports: [ CollectionGrid ],
  selector: 'app-collection-page',
  styleUrl: './collection-page.scss',
  templateUrl: './collection-page.html',
})
export class CollectionPage {}
