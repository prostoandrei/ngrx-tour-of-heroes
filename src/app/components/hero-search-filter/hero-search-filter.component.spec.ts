import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSearchFilterComponent } from './hero-search-filter.component';

describe('HeroSearchFilterComponent', () => {
  let component: HeroSearchFilterComponent;
  let fixture: ComponentFixture<HeroSearchFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroSearchFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
