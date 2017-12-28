import { PobytdemoPage } from './app.po';

describe('pobytdemo App', function() {
  let page: PobytdemoPage;

  beforeEach(() => {
    page = new PobytdemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
