import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHeroDetailComponent } from './custom-hero-detail.component';

describe('CustomHeroDetailComponent', () => {
  let component: CustomHeroDetailComponent;
  let fixture: ComponentFixture<CustomHeroDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomHeroDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomHeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
