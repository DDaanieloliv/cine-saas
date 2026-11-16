import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PosterGrid } from './poster-grid';

describe('PosterGrid', () => {
  let component: PosterGrid;
  let fixture: ComponentFixture<PosterGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PosterGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(PosterGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
