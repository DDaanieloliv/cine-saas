import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CollectionTheme } from './collection-theme';

describe('CollectionTheme', () => {
  let component: CollectionTheme;
  let fixture: ComponentFixture<CollectionTheme>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CollectionTheme],
    }).compileComponents();

    fixture = TestBed.createComponent(CollectionTheme);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
