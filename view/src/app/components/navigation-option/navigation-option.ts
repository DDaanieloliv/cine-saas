import { Component, signal, WritableSignal } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  imports: [RouterLink],
  selector: 'app-navigation-option',
  styleUrl: './navigation-option.scss',
  templateUrl: './navigation-option.html',
})
export class NavigationOption {

  private currentUrl: WritableSignal<string>;

  constructor(private router: Router) {
    this.currentUrl = signal(this.router.url);

    this.router.events
      .pipe(
        filter(
          (event): event is NavigationEnd =>
            event instanceof NavigationEnd
        )
      )
      .subscribe(event => {
        this.currentUrl.set(event.urlAfterRedirects);
      });
  }

  public options = [
    { id: 1, name: 'Home' },
    { id: 2, name: 'Browse' },
    { id: 3, name: 'Collection' },
    { id: 4, name: 'Blog' },
  ];

  protected isOptionActive(optionName: string): boolean {
    const currentPath = this.currentUrl().split(/[?#]/)[0];

    const routesByOption: Record<string, string[]> = {
      Home: ['/home'],
      Browse: ['/browse'],
      Collection: ['/collection', '/collection-theme'],
      Blog: ['/blog'],
    };

    return routesByOption[optionName]?.includes(currentPath) ?? false;
  }
}
