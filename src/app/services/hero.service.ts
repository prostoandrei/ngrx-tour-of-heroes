import { Observable } from 'rxjs/Rx';
import { Hero } from '../models/hero';
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private http: Http
  ) {}

  getHeroes(): Observable<Hero[]> {
    return this.http
      .get(this.heroesUrl)
      .map(response => response.json().data as Hero[])
      // .toPromise()
      // .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  // getHero(id: number): Promise<Hero> {
  //   const url = `${this.heroesUrl}/${id}`;
  //   return this.http.get(url)
  //     .toPromise()
  //     .then(response => response.json().data as Hero)
  //     .catch(this.handleError);
  // }

  // delete(id: number): Promise<void> {
  //   const url = `${this.heroesUrl}/${id}`;
  //   return this.http.delete(url, {headers: this.headers})
  //     .toPromise()
  //     .then(() => null)
  //     .catch(this.handleError);
  // }

  // update(hero: Hero): Promise<Hero> {
  //   // const url = `${this.heroesUrl}/11`; // ${hero.id}
  //   const url = `${this.heroesUrl}/${hero.id}`;
  //   return this.http
  //     .put(url, JSON.stringify(hero), {headers: this.headers})
  //     .toPromise()
  //     .then(() => hero)
  //     .catch(this.handleError);
  // }

  // create(name: string): Promise<Hero> {
  //   return this.http
  //     .post(
  //       this.heroesUrl,
  //       JSON.stringify({ name: name }),
  //       { headers: this.headers }
  //     )
  //     .toPromise()
  //     .then(res => res.json().data)
  //     .catch(this.handleError);
  // }

  private handleError(error: any): Observable<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Observable.onErrorResumeNext(); // .reject(error.message || error);
  }

}
