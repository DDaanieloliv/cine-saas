import { Component } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { Bar } from './components/bar/bar';
import { filter } from 'rxjs';
import { Footer } from './components/footer/footer';

@Component({
  imports: [RouterOutlet, Bar, Footer],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  constructor(private r: Router) {
    console.log(r.url)

    this.r.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(event => {
        if (event instanceof NavigationEnd) {
          console.log('Navegação concluída:', event.urlAfterRedirects);
        }
      });
  }

  public toSearchInBrowsePage: string = '';

  public updateBrowseSearchContent(value: string) {
    this.toSearchInBrowsePage = value;
  }
}
