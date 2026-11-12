import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowseFilters } from './browse-filters';

describe('BrowseFilters', () => {
  let component: BrowseFilters;
  let fixture: ComponentFixture<BrowseFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseFilters],
    }).compileComponents();

    fixture = TestBed.createComponent(BrowseFilters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
