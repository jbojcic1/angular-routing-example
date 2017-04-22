import { HomibleWebPage } from './app.po';

describe('homible-web App', () => {
  let page: HomibleWebPage;

  beforeEach(() => {
    page = new HomibleWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('homible works!');
  });
});
