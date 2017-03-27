import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-search-filter',
  templateUrl: './hero-search-filter.component.html',
  styleUrls: ['./hero-search-filter.component.scss']
})
export class HeroSearchFilterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  search(name) {
    console.log(name);
  }

}
