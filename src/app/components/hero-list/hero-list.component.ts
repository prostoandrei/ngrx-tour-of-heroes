import { ActionTypes } from '../../actions/heroes';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Hero } from '../../models/hero';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroListComponent {
  @Input() heroes;

  selectedHero: Hero;

  constructor(
    private router: Router,
    private store: Store<any>
  ) {}

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  delete(hero: Hero): void {
    this.store.dispatch({ type: ActionTypes.DELETE_HERO, payload: hero.id });
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}
