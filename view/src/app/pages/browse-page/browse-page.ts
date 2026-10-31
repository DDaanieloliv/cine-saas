import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-browse-page',
  styleUrl: './browse-page.scss',
  templateUrl: './browse-page.html',
})
export class BrowsePage {

  protected selectedTab = 'All';

  protected tabSelected(value: string) :void  {
    this.selectedTab = value;
  }
}
