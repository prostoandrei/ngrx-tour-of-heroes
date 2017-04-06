import { Hero } from '../../models/hero';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes-grid',
  templateUrl: './heroes-grid.component.html',
  styleUrls: ['./heroes-grid.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeroesGridComponent implements OnInit {

  @Input() heroes: Hero[];

  constructor() { }

  ngOnInit() {
  }

}
