import { browser, element, by } from 'protractor';

export class HomibleWebPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('homible-root h1')).getText();
  }
}
