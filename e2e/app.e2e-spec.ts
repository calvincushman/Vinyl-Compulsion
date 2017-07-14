import { VinylCompulsionPage } from './app.po';

describe('vinyl-compulsion App', () => {
  let page: VinylCompulsionPage;

  beforeEach(() => {
    page = new VinylCompulsionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
