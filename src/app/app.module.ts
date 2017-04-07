import { HeroesEffects } from './effects/heroes.effects';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';

// containers
import { AppComponent } from './app.component';
import { HeroDetailComponent } from './containers/hero-detail/hero-detail.component';
import { HeroesComponent } from './containers/heroes/heroes.component';
import { DashboardComponent } from './containers/dashboard//dashboard.component';

// components
import { HeroSearchComponent } from './components/hero-search/hero-search.component';

import { HeroService } from './services/hero.service';

// db mocks
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { RouterStoreModule } from '@ngrx/router-store';
import { reducer } from './reducers';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HeroListComponent } from './components/hero-list/hero-list.component';
import { EffectsModule } from '@ngrx/effects';
import { AddHeroComponent } from './components/add-hero/add-hero.component';
import { HeroesGridComponent } from './components/heroes-grid/heroes-grid.component';
import { HeroSearchFilterComponent } from './components/hero-search-filter/hero-search-filter.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,

    StoreModule.provideStore(reducer),
    EffectsModule.run(HeroesEffects),
    RouterStoreModule.connectRouter(),
    // StoreDevtoolsModule.instrumentOnlyWithExtension(),

    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroListComponent,
    AddHeroComponent,
    HeroesGridComponent,
    HeroSearchFilterComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
