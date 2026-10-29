import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-row-section',
  styleUrl: './row-section.scss',
  templateUrl: './row-section.html',
})
export class RowSection implements AfterViewInit, OnDestroy {

  private frameId: number | null = null;


  constructor(
    private elementRef: ElementRef<HTMLElement>
  ) {}

  ngAfterViewInit(): void {
    this.updateRowOpacities();
    this.updateAllRowControls();
  }

  ngOnDestroy(): void {
    if (this.frameId !== null) {
      cancelAnimationFrame(this.frameId);
    }
  }

  protected rowControls: Record<
  number,
  {
    canScrollLeft: boolean;
    canScrollRight: boolean;
  }
  > = {};

  protected updateRowControls(
    viewport: HTMLElement,
    rowId: number
  ): void {
    const maxScrollLeft =
      viewport.scrollWidth - viewport.clientWidth;

    this.rowControls = {
      ...this.rowControls,
      [rowId]: {
        canScrollLeft: viewport.scrollLeft > 0,
        canScrollRight:
          viewport.scrollLeft < maxScrollLeft - 1
      }
    };
  }

  private updateAllRowControls(): void {
    const viewports =
      this.elementRef.nativeElement.querySelectorAll<HTMLElement>(
        '.row_viewport'
    );

    viewports.forEach(viewport => {
      const rowId = Number(viewport.dataset['rowId']);

      if (Number.isFinite(rowId)) {
        this.updateRowControls(viewport, rowId);
      }
    });
  }

  @HostListener('window:resize')
  protected onWindowResize(): void {
    this.updateAllRowControls();
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  protected updateRowOpacities(): void {
    if (this.frameId !== null) {
      cancelAnimationFrame(this.frameId);
    }

    this.frameId = requestAnimationFrame(() => {
      const rows = Array.from(
        this.elementRef.nativeElement.querySelectorAll<HTMLElement>(
          '.row_block'
        )
      );

      const viewportCenter = window.innerHeight / 2;

      let focusedRow: HTMLElement | null = null;
      let minDistance = Infinity;

      for (const row of rows) {
        const rect = row.getBoundingClientRect();
        const center = (rect.top + rect.bottom) / 2;
        const distance = Math.abs(center - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          focusedRow = row;
        }
      }

      for (const row of rows) {
        row.style.opacity = row === focusedRow ? '1' : '0.40';
      }

      this.frameId = null;
    });
  }

  protected scrollRow(
    viewport: HTMLElement,
    direction: number
  ): void {
    viewport.scrollBy({
      left: direction * viewport.clientWidth * 0.85,
      behavior: 'smooth'
    });
  }

  protected blocks = [
    {
      id: 1,
      related_head: "Best of the 21st Century",
      related_titles: [
        { id: 1, title: "The Lives of Others", type: "movie" },
        { id: 2, title: "Dark", type: "series" },
        { id: 3, title: "The Intouchables", type: "movie" },
        { id: 4, title: "Inception", type: "movie" },
        { id: 5, title: "Breaking Bad", type: "series" },
        { id: 6, title: "Whiplash", type: "movie" },
        { id: 7, title: "Chernobyl", type: "series" }
      ]
    },
    {
      id: 2,
      related_head: "Essential European Cinema",
      related_titles: [
        { id: 1, title: "Cinema Paradiso", type: "movie" },
        { id: 2, title: "Babylon Berlin", type: "series" },
        { id: 3, title: "Amélie", type: "movie" },
        { id: 4, title: "The Hunt", type: "movie" },
        { id: 5, title: "Lupin", type: "series" },
        { id: 6, title: "The Lives of Others", type: "movie" },
        { id: 7, title: "Dark", type: "series" }
      ]
    },
    {
      id: 3,
      related_head: "Award-Winning Films",
      related_titles: [
        { id: 1, title: "Parasite", type: "movie" },
        { id: 2, title: "The Crown", type: "series" },
        { id: 3, title: "Anatomy of a Fall", type: "movie" },
        { id: 4, title: "Everything Everywhere All at Once", type: "movie" },
        { id: 5, title: "Succession", type: "series" },
        { id: 6, title: "Nomadland", type: "movie" },
        { id: 7, title: "The Queen's Gambit", type: "series" }
      ]
    },
    {
      id: 4,
      related_head: "Crime and Mystery",
      related_titles: [
        { id: 1, title: "The Girl with the Dragon Tattoo", type: "movie" },
        { id: 2, title: "Mindhunter", type: "series" },
        { id: 3, title: "The Bridge", type: "series" },
        { id: 4, title: "Zodiac", type: "movie" },
        { id: 5, title: "True Detective", type: "series" },
        { id: 6, title: "Prisoners", type: "movie" },
        { id: 7, title: "Mare of Easttown", type: "series" }
      ]
    },
    {
      id: 5,
      related_head: "Science Fiction and Fantasy",
      related_titles: [
        { id: 1, title: "Dune", type: "movie" },
        { id: 2, title: "Dark Matter", type: "series" },
        { id: 3, title: "Interstellar", type: "movie" },
        { id: 4, title: "Arrival", type: "movie" },
        { id: 5, title: "The Expanse", type: "series" },
        { id: 6, title: "Blade Runner 2049", type: "movie" },
        { id: 7, title: "Severance", type: "series" }
      ]
    },
    {
      id: 6,
      related_head: "Drama and Human Stories",
      related_titles: [
        { id: 1, title: "The Shawshank Redemption", type: "movie" },
        { id: 2, title: "Normal People", type: "series" },
        { id: 3, title: "Manchester by the Sea", type: "movie" },
        { id: 4, title: "The Pursuit of Happyness", type: "movie" },
        { id: 5, title: "This Is Us", type: "series" },
        { id: 6, title: "Atonement", type: "movie" },
        { id: 7, title: "Maid", type: "series" }
      ]
    },
    {
      id: 7,
      related_head: "Contemporary Favorites",
      related_titles: [
        { id: 1, title: "Poor Things", type: "movie" },
        { id: 2, title: "The Bear", type: "series" },
        { id: 3, title: "Everything Everywhere All at Once", type: "movie" },
        { id: 4, title: "Oppenheimer", type: "movie" },
        { id: 5, title: "The Last of Us", type: "series" },
        { id: 6, title: "Barbie", type: "movie" },
        { id: 7, title: "Shōgun", type: "series" }
      ]
    }
  ];
}
