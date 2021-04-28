import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomHeroesListComponent } from './custom-heroes-list.component';

describe('CustomHeroesListComponent', () => {
  let component: CustomHeroesListComponent;
  let fixture: ComponentFixture<CustomHeroesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomHeroesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomHeroesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
