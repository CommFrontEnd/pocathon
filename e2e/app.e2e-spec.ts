import { PocathonPage } from './app.po';

describe('pocathon App', () => {
  let page: PocathonPage;

  beforeEach(() => {
    page = new PocathonPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
