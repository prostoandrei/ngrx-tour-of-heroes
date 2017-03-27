import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hero-search-filter',
  templateUrl: './hero-search-filter.component.html',
  styleUrls: ['./hero-search-filter.component.scss']
})
export class HeroSearchFilterComponent implements OnInit {

  @Output() changeFilter = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  search(name) {
    console.log(name);
  }

}
