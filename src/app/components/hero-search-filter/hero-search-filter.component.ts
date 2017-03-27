import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hero-search-filter',
  templateUrl: './hero-search-filter.component.html',
  styleUrls: ['./hero-search-filter.component.scss']
})
export class HeroSearchFilterComponent {

  @Output() changeFilter = new EventEmitter<any>();
  filter: string;

  @Input() set active(val) {
    this.filter = val.searchName;
  }

}
