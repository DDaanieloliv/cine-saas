import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroStack } from './hero-stack';

describe('HeroStack', () => {
  let component: HeroStack;
  let fixture: ComponentFixture<HeroStack>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroStack],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroStack);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
