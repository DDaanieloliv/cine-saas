import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollectionGrid } from './collection-grid';

describe('CollectionGrid', () => {
  let component: CollectionGrid;
  let fixture: ComponentFixture<CollectionGrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionGrid],
    }).compileComponents();

    fixture = TestBed.createComponent(CollectionGrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
