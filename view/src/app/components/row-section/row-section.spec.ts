import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RowSection } from './row-section';

describe('RowSection', () => {
  let component: RowSection;
  let fixture: ComponentFixture<RowSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RowSection],
    }).compileComponents();

    fixture = TestBed.createComponent(RowSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
