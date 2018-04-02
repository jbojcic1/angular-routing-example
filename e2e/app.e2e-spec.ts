import { RoutingTestWebPage } from './app.po';

describe('routing-test-web App', () => {
  let page: RoutingTestWebPage;

  beforeEach(() => {
    page = new RoutingTestWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('routing-test works!');
  });
});
