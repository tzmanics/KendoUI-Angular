import { AngularAppStylingPage } from './app.po';

describe('angular-app-styling App', function() {
  let page: AngularAppStylingPage;

  beforeEach(() => {
    page = new AngularAppStylingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
