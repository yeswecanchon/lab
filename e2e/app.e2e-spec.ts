import { BnfPage } from './app.po';

describe('bnf App', function() {
  let page: BnfPage;

  beforeEach(() => {
    page = new BnfPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
