import { browser, element, by } from 'protractor';

export class RoutingTestWebPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('routing-test-root h1')).getText();
  }
}
