import { ActionTypes } from '../../actions/heroes';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { HeroService } from '../../services/hero.service';
import { Hero } from '../../models/hero';
import 'rxjs/add/operator/take';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  heroes: Observable<Hero[]>;

  constructor(
    private heroService: HeroService,
    private store: Store<any>
  ) { }

  ngOnInit() {
    // this.store.dispatch({ type: ActionTypes.GET_HEROES });
    this.heroes = this.store.select('heroes');
  }

}
