import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowseTabs } from './browse-tabs';

describe('BrowseTabs', () => {
  let component: BrowseTabs;
  let fixture: ComponentFixture<BrowseTabs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowseTabs],
    }).compileComponents();

    fixture = TestBed.createComponent(BrowseTabs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
