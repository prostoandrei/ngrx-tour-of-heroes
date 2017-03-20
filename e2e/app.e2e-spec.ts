import { NgrxTourOfHeroesPage } from './app.po';

describe('ngrx-tour-of-heroes App', () => {
  let page: NgrxTourOfHeroesPage;

  beforeEach(() => {
    page = new NgrxTourOfHeroesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
