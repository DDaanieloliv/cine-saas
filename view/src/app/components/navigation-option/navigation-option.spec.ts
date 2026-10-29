import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationOption } from './navigation-option';

describe('NavigationOption', () => {
  let component: NavigationOption;
  let fixture: ComponentFixture<NavigationOption>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationOption],
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationOption);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
