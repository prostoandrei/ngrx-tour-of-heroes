import { SearchFilterState } from '../reducers/heroes-search-filter.reducer';
import { Observable } from 'rxjs/Rx';
import { Hero } from '../models/hero';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(
    private http: Http
  ) {}

  getHeroes(filter): Observable<Hero[]> {
    return this.http
      .get(this.heroesUrl)
      .map(response => this.getFilteredHeroes(response.json().data, filter))
      .catch(this.handleError);
  }

  getFilteredHeroes(heroes: Hero[], filter: SearchFilterState) {
    if (!filter.searchName) {
      return heroes;
    } else {
      return heroes.filter((hero) => hero.name.includes(filter.searchName));
    }
  }

  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .map(response => response.json().data as Hero)
      .catch(this.handleError);
  }

  delete(id: number): Observable<void> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete(url, { headers: this.headers })
      .map(() => null)
      .catch(this.handleError);
  }

  update(hero: Hero): Observable<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), { headers: this.headers })
      .map(() => hero)
      .catch(this.handleError);
  }

  create(name: string): Observable<Hero> {
    return this.http
      .post(
        this.heroesUrl,
        JSON.stringify({ name: name }),
        { headers: this.headers }
      )
      .map(res => res.json().data)
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.onErrorResumeNext(); // .reject(error.message || error);
  }

}
