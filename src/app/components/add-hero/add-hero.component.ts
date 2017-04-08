import { ActionTypes } from '../../actions/heroes';
import { Store } from '@ngrx/store';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.scss']
})
export class AddHeroComponent implements OnInit {

  heroName: String;

  constructor(
    private store: Store<any>
  ) { }

  ngOnInit() {
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.store.dispatch({ type: ActionTypes.CREATE_HERO, payload: name });
  }

}






























// @Input()
// public set reset(action) {
//   this.heroName = '';
// }
