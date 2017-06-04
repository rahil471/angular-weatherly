import { AngularWeatherlyPage } from './app.po';

describe('angular-weatherly App', () => {
  let page: AngularWeatherlyPage;

  beforeEach(() => {
    page = new AngularWeatherlyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
