import { NgrxImmutablePage } from './app.po';

describe('ngrx-immutable App', function() {
  let page: NgrxImmutablePage;

  beforeEach(() => {
    page = new NgrxImmutablePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
