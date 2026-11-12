import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-browse-tabs',
  styleUrl: './browse-tabs.scss',
  templateUrl: './browse-tabs.html',
})
export class BrowseTabs {

  protected selectedTab = 'All';

  protected tabSelected(value: string) :void  {
    this.selectedTab = value;
  }
}
